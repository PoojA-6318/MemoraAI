from app.ai.gemini_service import extract_memory

meeting = """
Sprint Planning Meeting

Decision:
Launch shifted to August.

Task:
Pooja will complete Backend API.

Task:
Riya will complete UI.

Risk:
Testing incomplete.

Summary:
Launch postponed.
"""

print(extract_memory(meeting))