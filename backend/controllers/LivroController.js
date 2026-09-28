
const Livro = require("../models/Livro");

class LivroController {
  
  listar(req, res) {
    const livros = Livro.listarTodos();
    res.json(livros);
  }

  
  cadastrar(req, res) {
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const preco = req.body.preco;

    if (!titulo || !autor || !preco) {
      return res.status(400).json({
        mensagem: "Preencha título, autor e preço para cadastrar o livro!"
      });
    }

    const novoLivro = Livro.adicionar(titulo, autor, preco);

    res.status(201).json({
      mensagem: "Livro cadastrado com sucesso!",
      livro: novoLivro
    });
  }
}

module.exports = new LivroController();
