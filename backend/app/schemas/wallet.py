from jsonschema import validate
from jsonschema.exceptions import SchemaError, ValidationError

wallet_schema = {
    "type": "object",
    "properties": {
        "amount": {"type": "integer"},
        "admin_unique_id": {"type": "string"}
    },
    "required": ["amount", "admin_unique_id"],
    "additionalProperties": False,
}


def validate_wallet(data):
    try:
        validate(data, wallet_schema)
    except ValidationError as e:
        return {"ok": False, "message": e}
    except SchemaError as e:
        return {"ok": False, "message": e}
    return {"ok": True, "data": data}
