from jsonschema import validate
from jsonschema.exceptions import SchemaError, ValidationError

user_schema = {
    "type": "object",
    "properties": {
        "first_name": {"type": "string"},
        "last_name": {"type": "string"},
        "date_of_birth": {"type": "string", "format": "date"},
        "gender": {"type": "string"},
        "phone_number": {"type": "integer"},
        "role": {"type": "string"},
        "unique_id": {"type": "string"},
        "current_balance": {"type": "integer"}
    },
    "required": ["phone_number"],
    "additionalProperties": False,
}


def validate_user(data):
    try:
        validate(data, user_schema)
    except ValidationError as e:
        return {"ok": False, "message": e}
    except SchemaError as e:
        return {"ok": False, "message": e}
    return {"ok": True, "data": data}
