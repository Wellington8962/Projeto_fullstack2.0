from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd

# Função para carregar arquivo CSV
def dados_csv():
    
    class Imovel(BaseModel):
        tipo: str
        bairro: str
        quartos: int
        valor: float
        condominio: float
        iptu: float


    # Lendo o arquivo CSV e criando um DataFrame atribuindo-o a variável "imoveis"
    imoveis = pd.read_csv('imoveis.csv', sep=',')

    # Convertendo o DataFrame para uma lista de objetos Imovel
    imoveis = [Imovel(**row) for row in imoveis.to_dict(orient='records')]
    return imoveis

# Função para carregar arquivo JSON
def dados_json():
    class Person(BaseModel):
        id: int
        name: str
        age: int

    # Carregando o arquivo JSON e atribuindo à variável df
    df = pd.read_json('arquivo_dados.json')
    
    # Convertendo para classe Person e atribuindo à variável users
    users = [Person(**row) for row in df.to_dict(orient='records')]
    return users

app = FastAPI()

# Configurando CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Definindo rota para mostrar os resultados da função dados_csv
@app.get("/mostrar_dados_csv")
def mostrar_dados_csv():
    return dados_csv()

# Definindo rota para mostrar os resultados da função dados_json
@app.get("/mostrar_dados_json")
def mostrar_dados_json():
    return dados_json()

