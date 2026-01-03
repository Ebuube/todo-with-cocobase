import express from "express";
import { Cocobase } from "cocobase";

// Load ENV on local
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

// Initialize Cocobase SDK
// (get API_KEY & PROJECT_ID from your Cocobase dashboard)
const db = new Cocobase({
  apiKey: process.env.COCOBASE_API_KEY,
  projectId: process.env.COCOBASE_PROJECT_ID,
});

// Your todo collection name
const COLLECTION = "todos";

// Health check - GET /
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Todo API with Cocobase" });
});

// Create Todo - POST /todos
app.post("/todos", async (req, res) => {
  try {
    const data = req.body;
    const result = await db.createDocument(COLLECTION, data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// List all Todos - GET /todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await db.listDocuments(COLLECTION);
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Single Todo - GET /todos/:id
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await db.getDocument(COLLECTION, id);
    res.json(todo);
  } catch (err) {
    res.status(404).json({ error: "Todo not found" });
  }
});

// Update Todo - PUT /todos/:id
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updated = await db.updateDocument(COLLECTION, id, data);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Todo - DELETE /todos/:id
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.deleteDocument(COLLECTION, id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Startup
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})
