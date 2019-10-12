import os
import sys
import requests
from flask import jsonify, request, make_response, send_from_directory

ROOT_PATH = os.path.dirname(os.path.realpath(__file__))
os.environ.update({'ROOT_PATH': ROOT_PATH})

from app import app

# Port variable to run the server on.
PORT = 5001

@app.errorhandler(404)
def not_found(error):
    """ error handler """
    return make_response(jsonify({'error': 'Not found'}), 404)


@app.route('/')
def index():
    """ static files serve """
    return make_response(jsonify({'message': 'Server is running'}), 200)


@app.route('/health', methods=['GET'])
def dummy_endpoint():
    """ Testing endpoint """
    return jsonify({'data': 'Server running'}), 200


if __name__ == '__main__':
    app.config['DEBUG'] = os.environ.get('ENV') == 'development'
    app.run(host='0.0.0.0', port=int(PORT))