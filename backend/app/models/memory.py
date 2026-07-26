from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime

from app.database.base import Base


class Memory(Base):
    __tablename__ = "memories"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    summary = Column(Text, nullable=False)
    decision = Column(Text, nullable=False)
    tasks = Column(Text, nullable=False)
    risks = Column(Text, nullable=False)
    meeting_text = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)