const listaAlimentos = [
    {
        alimento: 'Feijão',
        proteina: 6,
        carboidratos: 20,
        gordura: 1,
        img:'feijao.png'
    },
    {
        alimento: 'Grão-de-bico',
        proteina: 8.9,
        carboidratos: 27,
        gordura: 2.6,
        img:'grao-de-bico.png'
    },
    {
        alimento: 'Brócolis',
        proteina: 3.7,
        carboidratos: 11.2,
        Gordura: 0.6,
        img: 'brocolis.png'
    },
    {
        alimento: 'Lentilha',
        proteina: 6,
        carboidratos: 20,
        gordura: 1,
        img: 'lentilha.png'
    },
    {
        alimento: 'Amendoim',
        proteina: 26,
        carboidratos: 16,
        gordura: 49,
        img: 'amendoim.png'

    },
    {
        alimento: 'Arroz integral',
        proteina: 2.6,
        carboidratos: 23,
        gordura: 0.4,
        img: 'arroz-integral.png'
    },
    {
        alimento: 'Batata-doce',
        proteina: 1.6,
        carboidratos: 20,
        gordura: 0.1,
        img: 'batata-doce.png'
    },
    {
        alimento: 'Aveia',
        proteina: 16.9,
        carboidratos: 66,
        gordura: 6.9,
        img: 'aveia.png'
    },
    {
        alimento: 'Milho cozido',
        proteina: 3.4,
        carboidratos: 21,
        gordura: 1.2,
        img: 'milho-cozido.png'
    },
    {
        alimento: 'Banana',
        proteina: 1.1,
        carboidratos: 22,
        gordura: 0.2,
        img: 'banana.png'
    },

    {
        alimento: 'Abacate',
        proteina: 2,
        carboidratos: 9,
        gordura: 15,
        img: 'abacate.png'

    },
    {
        alimento: 'Amêndoas',
        proteina: 21,
        carboidratos: 22,
        gordura: 49,
        img: 'amendoas.png'
    },
    {
        alimento: 'Sementes de chia',
        proteina: 16,
        carboidratos: 42,
        gordura: 31,
        img: 'chia.png'
    },
    {
        alimento: 'Óleo de coco',
        proteina: 0,
        carboidratos: 0,
        gordura: 100,
        img: 'oleo-de-coco.png'
    },
    {
        alimento: 'Castanha de caju',
        proteina: 18,
        carboidratos: 30,
        gordura: 44,
        img: 'castanha de caju.png'
    },


];

function verAlimentos() {
    var alimento = ``

    mostrar_alimentos.innerHTML = " ";
    for (var i = 0; i < listaAlimentos.length; i++) {
        alimento = `
            <div class="box-alimentos">

                <div class="titulo_alimento">
                    <img src="../assets/alimentos/${listaAlimentos[i].img}" alt="">
                    
                </div>

                <div class="info_alimentos">
                    <h3> ${listaAlimentos[i].alimento}</h3>
                    <p>Proteínas: ${listaAlimentos[i].proteina}g</p>
                    <p>Carboidratos: ${listaAlimentos[i].carboidratos}g</p>
                    <p>Gorduras: ${listaAlimentos[i].gordura}g</p>
                </div>

            </div>`

        mostrar_alimentos.innerHTML += alimento;
        tituloVisivel()
    }
}

function tituloVisivel() {
    var titulo_alimento = document.getElementById("alimentos");
    titulo_alimento.style.visibility = "visible";
}