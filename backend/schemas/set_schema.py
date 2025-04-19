from typing import List, Set

from pydantic import BaseModel


class SetsRequest(BaseModel):
    sets: List[Set[int]]
