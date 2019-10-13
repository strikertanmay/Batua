import datetime
import os

from flask import jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required

from app import app, mongo
from app.schemas.transaction import validate_transaction
from bson.json_util import dumps, loads
from bson.objectid import ObjectId


@app.route("/wallet", methods=["GET", "POST", "DELETE", "PATCH"])
@jwt_required
def wallet():
    if request.method == "GET":
        return str(mongo.db.wallet.find_one({}))