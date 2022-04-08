var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/1/1a/O_Jogo_da_Imita%C3%A7%C3%A3o.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/e/ee/I%2C_Robot.jpg/200px-I%2C_Robot.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/Homem_Bicenten%C3%A1rio_1999.jpg/200px-Homem_Bicenten%C3%A1rio_1999.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/TSN-cover-CD.jpg/220px-TSN-cover-CD.jpg",
    "https://upload.wikimedia.org/wikipedia/en/4/44/Silicon_Valley_Season_1.jpg"
  ];
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }
  