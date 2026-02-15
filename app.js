const express = require("express");
const app = express();

const PORT = 7000;

app.get("/", (req, res) => {
  res.send("Hello from Render!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
