# Projeto Fullstack 2.0

Este é um projeto **Fullstack** desenvolvido com **React.js** no frontend e **FastAPI** no backend. Ele demonstra a integração entre um frontend moderno e um backend robusto, com comunicação via APIs.

## 📁 Estrutura do Projeto

O projeto está dividido em dois diretórios principais:

- **`backend/`**: Contém o código do backend (FastAPI).
- **`frontend/`**: Contém o código do frontend (React.js).

---

## Tecnologias Utilizadas

### Backend
- **Python** 3.10
- **FastAPI**
- **Uvicorn**
- **Docker**

### Frontend
- **React.js** 18
- **Axios**
- **Docker**

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
Certifique-se de ter os seguintes itens instalados:
- **Python** 3.9 ou superior
- **Node.js** e **npm**
- **Docker** e **Docker Compose**
- Git

---

### Backend

#### Configuração Local no Backend

1. Entre no diretório do backend:
   ```bash
   cd backend
   ```

2. Crie um ambiente virtual:
   ```bash
   python3 -m venv venv
   ```

3. Ative o ambiente virtual:
   - **MacOS & Linux**:
     ```bash
     source venv/bin/activate
     ```
   - **Windows**:
     ```bash
     venv\Scripts\activate
     ```

4. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

5. Execute o servidor de desenvolvimento:
   ```bash
   uvicorn main:app --reload
   ```

O backend estará disponível em [http://localhost:8000](http://localhost:8000).

---

### Frontend

#### Configuração Local no Frontend

1. Navegue até o diretório do projeto onde deseja criar o frontend:
   ```bash
   cd /caminho/do/projeto
   ```

2. Crie o projeto React na pasta `frontend`:
   ```bash
   npx create-react-app frontend
   ```

3. Entre no diretório do frontend:
   ```bash
   cd frontend
   ```

4. Instale dependências adicionais (como o Axios, se necessário):
   ```bash
   npm install axios
   ```

5. Execute o servidor de desenvolvimento:
   ```bash
   npm start
   ```

O frontend estará disponível em [http://localhost:3000](http://localhost:3000).

---

### Docker

#### Criar e Conectar à Rede Docker

1. Crie a rede Docker chamada `fullstack`:
   ```bash
   docker network create fullstack
   ```

2. Inicie o contêiner do backend e conecte-o à rede:
   ```bash
   docker run --name backend_atividade --rm --network fullstack -p 8000:8000 backend_atividade
   ```

3. Inicie o contêiner do frontend e conecte-o à mesma rede:
   ```bash
   docker run --name frontend_atividade --rm --network fullstack -p 3000:3000 frontend_atividade
   ```