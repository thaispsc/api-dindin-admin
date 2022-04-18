const express = require("express");
const cors = require("cors");
const routes = require("./routes")

const app = express();

app.use(cors());
app.use(routes);

app.listen(8000, () => console.log("Servidor rodando na porta 8000"));