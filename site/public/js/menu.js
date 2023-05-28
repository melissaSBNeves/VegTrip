
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

//MENU LATERAL
var menuLateral = `
<div class="btn-expandir">
<i class="bi bi-list"></i>
</div><!--btn-expandir-->

<ul>
<li class="item-menu">
    <a href="#">
        <span class="icon"><i class="bi bi-bar-chart-fill"></i>
        </span>
        <span class="txt-link">Dashboard</span>
    </a>
</li>

<li class="item-menu">
    <a href="#">
        <span class="icon"><i class="bi bi-people-fill"></i></span>
        <span class="txt-link">Usuários</span>
    </a>
</li>

<li class="item-menu">
    <a href="#">
        <span class="icon"><i class="bi bi-file-earmark-post"></i></span>
        <span class="txt-link">
            <p>Receitas</p>
        </span>
    </a>
</li>

<li class="item-menu">
    <a href="#">
        <span class="icon"><i class="bi bi-clipboard-data"></i></span>
        <span class="txt-link">Análise de Receitas</span>
    </a>
</li>

<li class="item-menu">
    <a href="#">
        <span class="icon"><i class="bi bi-box-arrow-right"></i></span>
        <span class="txt-link">Sair</span>
    </a>
</li>
</ul>

`