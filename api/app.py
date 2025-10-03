from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 必要に応じて制限してください
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get("https://meigen.doodlenote.net/api/json.php?c=1&e=1")
            response.raise_for_status()
            data = response.json()
        return data
    except Exception as e:
        print(e)
        return {"error": "apiデータが取得できませんでした"}
