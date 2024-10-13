const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const allowedDomains = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedDomains.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

mongoose
  .connect("mongodb://mongo:27017/mern_db", {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.log(error));

const ToDoSchema = new mongoose.Schema({
  task: String,
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

app.get("/api/todos", async (req, res) => {
  const todos = await ToDo.find();
  res.json(todos);
});

app.post("/api/todos", async (req, res) => {
  const todo = new ToDo({
    task: req.body.task,
  });
  await todo.save();
  res.json(todo);
});

app.delete("/api/todos/:id", async (req, res) => {
  await ToDo.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
