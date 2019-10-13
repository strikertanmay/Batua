import os
import random
import string

from flask import jsonify, request
from flask_jwt_extended import (create_access_token, create_refresh_token, get_jwt_identity,
                                jwt_refresh_token_required, jwt_required)

from app import app, flask_bcrypt, jwt, mongo
from app.schemas import validate_user

def randomString(stringLength=10):
    """Generate a random string of fixed length """
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(stringLength))

@jwt.unauthorized_loader
def unauthorized_response(callback):
    return jsonify({"ok": False, "message": "Missing Authorization Header"}), 401


@app.route("/auth", methods=["POST"])
def auth_user():
    """ auth endpoint """
    data = validate_user(request.get_json())
    if data["ok"]:
        data = data["data"]
        user = mongo.db.users.find_one({"phone_number": data["phone_number"]}, {"_id": 0})
        if user:
            access_token = create_access_token(identity=data)
            refresh_token = create_refresh_token(identity=data)
            user["token"] = access_token
            user["refresh"] = refresh_token
            return jsonify({"ok": True, "data": user}), 200
        else:
            return jsonify({"ok": False, "message": "invalid username or password"}), 401
    else:
        return jsonify({"ok": False, "message": "Bad request parameters: {}".format(data["message"])}), 400


@app.route("/register", methods=["POST"])
def register():
    """ register user endpoint """
    data = validate_user(request.get_json())
    if data["ok"]:
        data = data["data"]
        query = {"phone_number": data["phone_number"]}

        if mongo.db.users.find_one(query, {"_id": 0}):
            return jsonify({"ok": False, "message": "Phone Number Already Exists"}), 400

        
        if data["role"] == "admin":
            data["unique_id"] = randomString()
            wallet = {
                "amount": data["current_balance"],
                "admin_unique_id": data["unique_id"]
            }
            mongo.db.wallet.insert_one(wallet)
        else:
            # Supply Unique ID of admin as well
            pass
        
        mongo.db.users.insert_one(data)
        return jsonify({"ok": True, "message": "User created successfully!"}), 200
    else:
        return jsonify({"ok": False, "message": "Bad request parameters: {}".format(data["message"])}), 400


@app.route("/refresh", methods=["POST"])
@jwt_refresh_token_required
def refresh():
    """ refresh token endpoint """
    current_user = get_jwt_identity()
    ret = {"token": create_access_token(identity=current_user)}
    return jsonify({"ok": True, "data": ret}), 200


@app.route("/user", methods=["GET", "POST", "PATCH"])
@jwt_required
def user():
    """ route read user """

    current_user = get_jwt_identity()
    if request.method == "GET":
        # query = request.args
        data = mongo.db.users.find_one({"phone_number": current_user["phone_number"]})
        return str(data)

    data = request.get_json()
    if request.method == "POST":
        user_data = mongo.db.users.find_one({"phone_number": current_user["phone_number"]})
        return str(list(mongo.db.users.find({"unique_id": user_data["unique_id"]})))

    if request.method == "PATCH":
        if data.get("query", {}) != {}:
            mongo.db.users.update_one(data["query"], {"$set": data.get("payload", {})})
            return jsonify({"ok": True, "message": "record updated"}), 200
        else:
            return jsonify({"ok": False, "message": "Bad request parameters!"}), 400

