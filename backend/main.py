from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from routers.set_router import set_router

app = FastAPI(title='Set Theory API', version='1.0.0')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)


@app.get('/')
def root():
    return RedirectResponse(url='/docs')


app.include_router(set_router)


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
