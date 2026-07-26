from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.memory import Memory
from app.schemas.question import QuestionRequest
from app.ai.chat_service import ask_memora

router = APIRouter()


@router.post("/ask")
def ask_ai(request: QuestionRequest,
           db: Session = Depends(get_db)):

    memories = db.query(Memory).all()

    context = ""

    for memory in memories:
        context += f"""

Meeting Title:
{memory.title}

Summary:
{memory.summary}

Decision:
{memory.decision}

Tasks:
{memory.tasks}

Risks:
{memory.risks}

----------------------------------
"""

    answer = ask_memora(context, request.question)

    return {
        "question": request.question,
        "answer": answer
    }