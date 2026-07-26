from pydantic import BaseModel, Field

class Decision(BaseModel):
    decision: str = Field(
        default="",
        description="A major organizational decision explicitly mentioned in the document."
    )