from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.ai.gemini_service import extract_memory
from app.models.memory import Memory

router = APIRouter()


@router.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    content = await file.read()
    meeting_text = content.decode("utf-8")

    # AI Extraction
    memory = extract_memory(meeting_text)

    # Save to Database
    new_memory = Memory(
        title=memory["title"],
        summary=memory["summary"],
        decision=memory["decision"],
        tasks="\n".join(memory["tasks"]),
        risks="\n".join(memory["risks"]),
        meeting_text=meeting_text
    )

    db.add(new_memory)
    db.commit()
    db.refresh(new_memory)

    return {
        "message": "Meeting processed successfully!",
        "memory_id": new_memory.id,
        "memory": memory
    }