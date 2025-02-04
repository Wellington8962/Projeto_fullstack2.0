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

2. Crie um ambiente virtual:
   ```bash
   python3 -m venv venv

3. Ative o ambiente virtual:
   ```bash
   source venv/bin/activate

4. Instale as dependências:
   ```bash
   pip install -r requirements.txt

5. Execute o servidor de desenvolvimento:
   ```bash
   uvicorn main:app --reload

