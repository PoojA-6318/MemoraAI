import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def ask_memora(context: str, question: str):

    prompt = f"""
You are Memora AI.

You answer ONLY using the meeting memories provided below.

If the answer cannot be found,
say:

"I couldn't find that information in the stored organizational memory."

Meeting Memories:

{context}


Question:

{question}
"""

    response = client.models.generate_content(
        model="gemini-flash-latest",
        contents=prompt,
    )

    return response.text