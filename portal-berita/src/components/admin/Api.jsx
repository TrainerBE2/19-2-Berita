const express = require("express");
const app = express();

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  //...
];

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.post("/api/data", (req, res) => {
  const { name, email } = req.body;
  const newData = { id: data.length + 1, name, email };
  data.push(newData);
  res.json(newData);
});

app.get("/api/data/:id", (req, res) => {
  const id = req.params.id;
  const foundData = data.find((item) => item.id === parseInt(id));
  if (!foundData) {
    res.status(404).json({ message: "Data not found" });
  } else {
    res.json(foundData);
  }
});

app.put("/api/data/:id", (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const foundData = data.find((item) => item.id === parseInt(id));
  if (!foundData) {
    res.status(404).json({ message: "Data not found" });
  } else {
    foundData.name = name;
    foundData.email = email;
    res.json(foundData);
  }
});

app.delete("/api/data/:id", (req, res) => {
  const id = req.params.id;
  const foundIndex = data.findIndex((item) => item.id === parseInt(id));
  if (foundIndex === -1) {
    res.status(404).json({ message: "Data not found" });
  } else {
    data.splice(foundIndex, 1);
    res.json({ message: "Data deleted successfully" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
