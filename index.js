const express = require("express");
var cors = require("cors");
const app = express();
const port = 8080;
const imprimir = require("./app");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/imprimir", (req, res) => {
  imprimir(req.body);
  res.json("Generado correctamente");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
