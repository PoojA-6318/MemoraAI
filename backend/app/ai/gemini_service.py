import json

from app.ai.config import settings
from app.ai.gemini_client import client
from app.ai.prompts import SYSTEM_PROMPT, EXTRACTION_PROMPT

print("Using Gemini Model:", settings.MODEL_NAME)


def extract_memory(document_text: str):
    """
    Analyze a document and extract operational memory.
    Returns a dictionary compatible with the current backend.
    """

    print("Model from settings:", settings.MODEL_NAME)

    prompt = f"""
{SYSTEM_PROMPT}

{EXTRACTION_PROMPT}

Document:

{document_text}
"""

    try:
        response = client.models.generate_content(
            model=settings.MODEL_NAME,
            contents=prompt,
            config={
                "response_mime_type": "application/json"
            }
        )

        print("Gemini Raw Response:")
        print(response.text)

        memory = json.loads(response.text)

        return {
            "title": memory.get("title", ""),
            "summary": memory.get("summary", ""),
            "decision": memory.get("decision", ""),
            "tasks": memory.get("tasks", []),
            "risks": memory.get("risks", [])
        }

    except Exception as e:
        print("=" * 60)
        print("MEMORA AI ERROR")
        print(e)
        print("=" * 60)

        return {
            "title": "",
            "summary": "AI extraction failed.",
            "decision": "",
            "tasks": [],
            "risks": []
        }