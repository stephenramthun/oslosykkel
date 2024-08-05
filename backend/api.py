from fastapi import FastAPI

from oslosykkel import router

app = FastAPI()

app.include_router(router.router, prefix="/api")
