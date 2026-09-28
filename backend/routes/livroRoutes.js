
const express = require("express");
const router = express.Router();
const livroController = require("../controllers/LivroController");

router.get("/livros", livroController.listar);
router.post("/livros", livroController.cadastrar);

module.exports = router;
