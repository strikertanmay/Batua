import os
import json
import datetime
from bson.objectid import ObjectId
from flask import Flask
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt

# create the flask object
app = Flask(__name__)
app.config['MONGO_URI'] = "mongodb://localhost:27017/batua"
app.config['JWT_SECRET_KEY'] = "anything"
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1)
mongo = PyMongo(app)
flask_bcrypt = Bcrypt(app)
jwt = JWTManager(app)

from app.controllers import *  # pylint: disable=W0401,C0413