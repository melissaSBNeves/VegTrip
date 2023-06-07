
//QUANDO OCORRER O EVENTO DE ROLAGEM, EXECUTAR FUNÇÃO
window.addEventListener("scroll", function () {
  //CAPTURAR A HEADER DO HTML
  var header = document.querySelector("header");

  //ADICIONANDO UMA CLASSE A MINHA HEADER 
  //QUANDO O EIXO Y DA MINHA PÁGINA FOR MAIOR QUE 0, EXECUTAR A CLASSE 'rolagem'
  // header.classList.toggle("sticky", window.scrollY > 0)
  if (window.scrollY > 0) {
    header.classList.add('sticky'); // adiciona classe "mudaCor"
    document.getElementById("logoHeader").src = './assets/logo_light.png';
  } else {
    header.classList.remove('sticky');
    document.getElementById("logoHeader").src = './assets/logo_dark.png'; // remove classe "mudaCor"
  }
})

