from typing import List
from fastapi import FastAPI
from pydantic import BaseModel
import json

app = FastAPI()

class Person(BaseModel):
    id: int
    name: str
    age: int

DB: List[Person] = [
    Person(id=1, name="Renato", age=30),
    Person(id=2, name="Thiago", age=29),
    Person(id=3, name='Maria', age=32)
]

@app.get("/api01")
def read_root():
    return DB

# Definindo rota para mostrar os dados json
@app.get("/api02")
def mostrar_dados_json():
    with open("arquivo_dados.json", "r") as file:
        data = json.load(file)
    return data

