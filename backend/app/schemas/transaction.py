from jsonschema import validate
from jsonschema.exceptions import SchemaError, ValidationError

transaction_schema = {
    "type": "object",
    "properties": {
        "sender_phone_number": {"type": "integer"},
        "receiver_phone_number": {"type": "integer"},
        "receiver_name": {"type": "string"},
        "success": {"type": "boolean"},
        "amount": {"type": "integer"},
        "date_time_of_transaction": {"type": "string", "format": "date-time"}
    },
    "required": ["sender_phone_number", "receiver_phone_number"],
    "additionalProperties": False,
}


def validate_transaction(data):
    try:
        validate(data, transaction_schema)
    except ValidationError as e:
        return {"ok": False, "message": e}
    except SchemaError as e:
        return {"ok": False, "message": e}
    return {"ok": True, "data": data}
