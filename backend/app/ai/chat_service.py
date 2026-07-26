from app.ai.config import settings
from app.ai.gemini_client import client
from app.ai.prompts import CHAT_PROMPT


def ask_memora(context: str, question: str) -> str:
    """
    Answers user questions using the stored organizational memories.
    """

    prompt = f"""
{CHAT_PROMPT}

==============================
ORGANIZATIONAL MEMORIES
==============================

{context}

==============================
QUESTION
==============================

{question}
"""

    try:

        response = client.models.generate_content(
            model=settings.MODEL_NAME,
            contents=prompt
        )

        return response.text.strip()

    except Exception as e:

        print("=" * 60)
        print("CHATBOT ERROR")
        print(e)
        print("=" * 60)

        return "Sorry, I couldn't answer your question."