
const livros = [
  { id: 1, titulo: "O Hobbit", autor: "J.R.R. Tolkien", preco: 45.9 },
  { id: 2, titulo: "Dom Casmurro", autor: "Machado de Assis", preco: 29.9 },
  { id: 3, titulo: "1984", autor: "George Orwell", preco: 39.9 }
];

const Livro = {
  
  listarTodos: function () {
    return livros;
  },

  
  adicionar: function (titulo, autor, preco) {
    const novoLivro = {
      id: livros.length + 1,
      titulo: titulo,
      autor: autor,
      preco: Number(preco)
    };
    livros.push(novoLivro);
    return novoLivro;
  }
};

module.exports = Livro;
