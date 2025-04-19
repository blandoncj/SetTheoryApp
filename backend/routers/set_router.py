from fastapi import APIRouter

from services.set_service import SetService
from schemas.set_schema import SetsRequest

set_router = APIRouter(prefix='/set', tags=['Set'])


@set_router.post('/union')
def union(sets: SetsRequest):
    return SetService.union(sets)


@set_router.post('/intersection')
def intersection(sets: SetsRequest):
    return SetService.intersection(sets)


@set_router.post('/difference')
def difference(sets: SetsRequest):
    return SetService.difference(sets)


@set_router.post('/symmetric_difference')
def symmetric_difference(sets: SetsRequest):
    return SetService.symmetric_difference(sets)
