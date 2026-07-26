from fastapi import FastAPI

from app.database.init_db import init_db
from app.api.routes import upload
from app.api.routes import timeline
from app.api.routes import ask

app = FastAPI(
    title="Memora AI Backend",
    description="AI Operational Memory System",
    version="1.0.0"
)

@app.on_event("startup")
def startup():
    init_db()

app.include_router(upload.router)
app.include_router(timeline.router)
app.include_router(ask.router)

@app.get("/")
def home():
    return {
        "message": "Welcome to Memora AI Backend!"
    }