
const express = require("express");
const cors = require("cors");
const livroRoutes = require("./routes/livroRoutes");

const app = express();

app.use(cors());          
app.use(express.json());  
app.use(livroRoutes);     

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log("Servidor rodando em http://localhost:" + PORTA);
});
