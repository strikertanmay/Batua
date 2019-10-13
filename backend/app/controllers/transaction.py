import datetime
import os

from flask import jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required

from app import app, mongo
from app.schemas.transaction import validate_transaction
from bson.json_util import dumps, loads
from bson.objectid import ObjectId


@app.route("/transaction", methods=["GET", "POST", "DELETE", "PATCH"])
@jwt_required
def transaction():

    if request.method == "POST":
        user = get_jwt_identity()
        data = request.get_json()

        if mongo.db.users.find_one({"phone_number": data["receiver_phone_number"]}):

            data["sender_phone_number"] = user["phone_number"]
            data["date_time_of_transaction"] = str(datetime.datetime.now())

            receiver_data = mongo.db.users.find_one({"phone_number": data["receiver_phone_number"]})
            sender_data = mongo.db.users.find_one({"phone_number": data["sender_phone_number"]})

            if data["amount"] > sender_data["current_balance"]:
                data["sender_phone_number"] = user["phone_number"]
                data["date_time_of_transaction"] = str(datetime.datetime.now())
                data["success"] = False

                db_response = mongo.db.transaction.insert_one(data)
                return_data = mongo.db.transaction.find_one({"_id": db_response.inserted_id})
                return jsonify({"ok": False, "data": dumps(return_data)}), 200

            receiver_balance = receiver_data["current_balance"] + data["amount"]
            sender_balance = sender_data["current_balance"] - data["amount"]

            mongo.db.users.update_one({"phone_number": receiver_data["phone_number"]}, {"$set": {'current_balance': receiver_balance}})
            mongo.db.users.update_one({"phone_number": sender_data["phone_number"]}, {"$set": {'current_balance': sender_balance}})
            
            mongo.db.wallet.update_one({"unique_id": receiver_data["unique_id"]}, {"$inc": {'amount': receiver_balance}} )
            mongo.db.wallet.update_one({"unique_id": sender_data["unique_id"]}, {"$inc": {'amount': -receiver_balance}} )
          
            data["success"] = True

            data = validate_transaction(data)

            if data["ok"]:
                db_response = mongo.db.transaction.insert_one(data["data"])
                return_data = mongo.db.transaction.find_one({"_id": db_response.inserted_id})
                return jsonify({"ok": True, "data": dumps(return_data)}), 200
            else:
                return (
                    jsonify({"ok": False, "message": "Bad request parameters: {}".format(data["message"])}),
                    400,
                )
        
        else:
            data["sender_phone_number"] = user["phone_number"]
            data["date_time_of_transaction"] = str(datetime.datetime.now())
            data["success"] = False

            db_response = mongo.db.transaction.insert_one(data)
            return_data = mongo.db.transaction.find_one({"_id": db_response.inserted_id})
            return jsonify({"ok": False, "data": dumps(return_data)}), 200

    if request.method == "GET":
        user = get_jwt_identity()
        l1 = list(mongo.db.transaction.find({"receiver_phone_number": user["phone_number"]}))
        l2 = list(mongo.db.transaction.find({"sender_phone_number": user["phone_number"]}))
        # print(l1, l2)
        if len(l1) == 0:
            l1 = ""
        
        if len(l2) == 0:
            l2 = ""
            
        return str(l1) + " " + str(l2)


@app.route("/list/transactions", methods=["GET"])
@jwt_required
def list_transactions():
    if request.method == "GET":
        return str(list(mongo.db.transaction.find({})))