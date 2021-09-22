function adicionarFilme() {
    var linkInserido = document.getElementById("filme").value;
    if (linkInserido.endsWith(".jpg")) {
      listarFilmesNaTela(linkInserido);
    } else {
      console.error("Imagem com formato inválido");
    }
    document.getElementById("filme").value = "";
  }
  
  function listarFilmesNaTela(linkInserido) {
    var posterDoFilme = "<img src=" + linkInserido + ">";
    var listaDosFilmes = document.getElementById("listaFilmes");
    listaDosFilmes.innerHTML = listaDosFilmes.innerHTML + posterDoFilme;
  }
  