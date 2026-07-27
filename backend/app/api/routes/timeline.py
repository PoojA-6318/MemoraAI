from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.memory import Memory

router = APIRouter()


@router.get("/timeline")
def get_timeline(db: Session = Depends(get_db)):

    memories = (
        db.query(Memory)
        .order_by(Memory.created_at.desc())
        .all()
    )

    timeline = []

    for memory in memories:
        timeline.append({
            "id": memory.id,
            "title": memory.title,
            "summary": memory.summary,
            "decision": memory.decision,
            "tasks": memory.tasks,
            "risks": memory.risks,
            "created_at": memory.created_at
        })

    return timeline