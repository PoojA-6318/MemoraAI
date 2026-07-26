from app.ai.schemas import Memory

def validate_memory(data) -> Memory:
    """
    Validate and convert Gemini output into a Memory object.
    """
    return Memory.model_validate(data)