# Todo with Cocobase

A minimal Node.js Todo API demonstrating how to integrate **Cocobase** for backend data operations.

This project is intentionally simple and focused on:

* Cocobase SDK usage
* Clean environment configuration
* Local development setup

---

## Prerequisites

* Node.js ≥ 18
* npm
* A Cocobase account

---

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/Ebuube/todo-with-cocobase.git
cd todo-with-cocobase
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment configuration

This project uses **dotenv**, which loads variables **only from a file named `.env` by default**.

> ⚠️ `dotenv` does **not** automatically load `.env.example` or wildcard `.env*` files.

#### Steps:

1. Copy the example file:

   ```bash
   cp .env.example .env
   ```
2. Open `.env` and replace the placeholder values:

   ```env
   COCOBASE_API_KEY=your-real-api-key
   COCOBASE_PROJECT_ID=your-real-project-id
   PORT=5000
   ```

> 🔒 **Never commit your `.env` file**. It is intentionally ignored.

---

## Running the application

Start the development server:

```bash
npm start
```

The server will run on:

```
http://localhost:5000
```

(or the port you configured in `.env`)

You can also access the **live deployed version** at:

```
https://todo-with-cocobase.onrender.com
```

---

## API Usage

Base URL (local or deployed):

```
http://localhost:5000
https://todo-with-cocobase.onrender.com
```

### Health Check

**GET /**

```bash
curl http://localhost:5000/
```

Response:

```json
{
  "status": "OK",
  "message": "Todo API with Cocobase"
}
```

---

### Create a Todo

**POST /todos**

```bash
curl -X POST http://localhost:5000/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Cocobase","completed":false}'
```

---

### List all Todos

**GET /todos**

```bash
curl http://localhost:5000/todos
```

---

### Get a Single Todo

**GET /todos/:id**

```bash
curl http://localhost:5000/todos/<todo_id>
```

---

### Update a Todo

**PUT /todos/:id**

```bash
curl -X PUT http://localhost:5000/todos/<todo_id> \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'
```

---

### Delete a Todo

**DELETE /todos/:id**

```bash
curl -X DELETE http://localhost:5000/todos/<todo_id>
```

---

## Project structure (simplified)

```
.
├── app.js
├── package.json
├── .env.example
├── .semgrepignore
└── README.md
```

---

## Notes

* This project is meant for learning and experimentation
* Semgrep is configured for **local-only** scanning
* Dependency and build artifacts are excluded from analysis
* Live deployment is available at **[https://todo-with-cocobase.onrender.com](https://todo-with-cocobase.onrender.com)**

---
