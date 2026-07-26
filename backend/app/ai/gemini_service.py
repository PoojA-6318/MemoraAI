import json
import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def extract_memory(meeting_text: str):

    prompt = f"""
You are Memora AI, an AI Operational Memory System.

Analyze the meeting notes and extract:

1. Title
2. Summary
3. Decision
4. Tasks
5. Risks

Return ONLY valid JSON.

Example:

{{
"title":"",
"summary":"",
"decision":"",
"tasks":[],
"risks":[]
}}

Meeting Notes:

{meeting_text}
"""

    response = client.models.generate_content(
        model="gemini-flash-latest",
        contents=prompt,
    )

    text = response.text.strip()
    print("Gemini Raw Response:")
    print(text)

    # Remove markdown if Gemini wraps JSON
    text = text.replace("```json", "").replace("```", "").strip()

    try:
        return json.loads(text)
    except json.JSONDecodeError:
        return {
            "title": "",
            "summary": text,
            "decision": "",
            "tasks": [],
            "risks": []
        }