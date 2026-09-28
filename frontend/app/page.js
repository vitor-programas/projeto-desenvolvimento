"use client"; 
import { useState } from "react";

export default function Home() {
  
  const [livros, setLivros] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [preco, setPreco] = useState("");
  const [mensagem, setMensagem] = useState("");

  
  const url = "http://localhost:3000/livros";

  // Botão "Carregar Livros": GET com fetch()
  function carregarLivros() {
    fetch(url)
      .then((response) => response.json())
      .then((dados) => {
        setLivros(dados);
        setMensagem("");
      })
      .catch(() => {
        setMensagem("Não consegui conectar com o servidor. Ele está ligado?");
      });
  }

  
  async function cadastrarLivro() {
    const novoLivro = { titulo: titulo, autor: autor, preco: preco };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoLivro),
      });

      const dados = await response.json();
      setMensagem(dados.mensagem);

      if (response.ok) {
        setTitulo("");
        setAutor("");
        setPreco("");
        carregarLivros();
      }
    } catch (erro) {
      setMensagem("Não consegui conectar com o servidor. Ele está ligado?");
    }
  }

  return (
    <div>
      <h1>📚 BookStore</h1>

      <div className="caixa">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Preço (ex: 45.90)"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <button onClick={cadastrarLivro}>Cadastrar Livro</button>
      </div>

      <p className="mensagem">{mensagem}</p>

      <button onClick={carregarLivros}>Carregar Livros</button>

      {/* map(): mostra cada livro da lista */}
      {livros.map((livro) => (
        <div className="caixa" key={livro.id}>
          <strong>{livro.titulo}</strong>
          <br />
          Autor: {livro.autor}
          <br />
          Preço: R$ {livro.preco.toFixed(2)}
        </div>
      ))}
    </div>
  );
}
