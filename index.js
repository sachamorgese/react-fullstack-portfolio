const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/api/anal", (req, res) => {
  console.log("DAS PENES IST COMING!");
  res.send("Just like Jesus wanted!");
});

const PORT = process.env.port || 3005;
app.listen(PORT, () => console.log("Server ready"));
