//GRÁFICO DE LINHAS - DESEMPENHO GERAL
const labels_desempenho_geral = [];

const dados_desempenho_geral = {
  labels: labels_desempenho_geral,
  datasets: [{
    label: 'Quantidade de usuários',
    data: [],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const desempenho_geral = {
  type: 'line',
  data: dados_desempenho_geral,
  options: {

  }
};


//GRÁFICO DE PIZZA - DESEMPENHO GENERO
const dados_desempenho_genero = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
    ],
    hoverOffset: 4
  }]
};


const desempenho_genero = {
  type: 'pie',
  data: dados_desempenho_genero,
  options: {
    responsive: true,
  }
};


//GRÁFICO DE BARRAS - DESEMPENHO POR IDADE
const labels_dp_idades = [];
const dados_dsp_idade = {
  labels: labels_dp_idades,
  datasets: [{
    label: 'Quantidade de usuários',
    data: [],
    backgroundColor: [
      '#3B8172',

    ],
    borderColor: [
      '#004D3D',

    ],
    borderWidth: 1
  }]
};

const dsp_idade = {
  type: 'bar',
  data: dados_dsp_idade,
  options: {
    responsive: true
  },
};

function atualizarDados() {

  // TOTAL USUÁRIOS - QUANTIDADE DE USUÁRIOS TOTAL 
  fetch("/usuarios/totalUsuarios").then(function (resposta) {
    if (resposta.ok) {
      if (resposta.status == 204) {
        console.log('Nenhum resultado encontrado.')
      }

      resposta.json().then(function (resposta) {
        console.log("TOTAL USUÁRIOS - QUANTIDADE DE USUÁRIOS TOTAL: ", JSON.stringify(resposta));
        qtd_user.innerHTML = resposta[0].totalUsuarios;
        console.log(resposta[0].totalUsuarios)
      })

    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });


  // GRÁFICO DE LINHA - QUANTIDADE DE USUÁRIOS POR DIA 
  fetch("/usuarios/desempenhoGeral").then(function (resposta) {
    if (resposta.ok) {
      if (resposta.status == 204) {
        console.log('Nenhum resultado encontrado.')
      }

      resposta.json().then(function (resposta) {
        console.log("GRÁFICO DE LINHA - QUANTIDADE DE USUÁRIOS POR DIA: ", JSON.stringify(resposta));

      

        for (var i = 0; i < resposta.length; i++) {
          var qtd_usuarios = resposta[i].qtd_registro;
          var dia_mes = resposta[i].mes_registro;

          console.log("qtd_usuarios: " + qtd_usuarios)
          console.log("dia_mes " + dia_mes)

          labels_desempenho_geral.push(dia_mes);
          dados_desempenho_geral.datasets[0].data.push(qtd_usuarios);
          grafico_desempenho_linha.update()


        }

      })

    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });



  // GRÁFICO DE PIZZA - QUANTIDADE DE USUÁRIOS SEGMENTADO POR GÊNERO
  fetch("/usuarios/segmentadoPorGenero").then(function (resposta) {
    if (resposta.ok) {
      if (resposta.status == 204) {
        console.log('Nenhum resultado encontrado.')
      }

      resposta.json().then(function (resposta) {
        console.log("GRÁFICO DE PIZZA - QUANTIDADE DE USUÁRIOS SEGMENTADO POR GÊNERO: ", JSON.stringify(resposta));

        for (var i = 0; i < resposta.length; i++) {
          var qtd_usuarios_genero = resposta[i].usuario;
          var genero = resposta[i].genero;


          console.log("GENERO: " + genero)

          dados_desempenho_genero.datasets[0].data.push(qtd_usuarios_genero);
          dados_desempenho_genero.labels.push(genero);
          grafico_desempenho_pizza.update()

        }

      })

    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });


  // GRÁFICO DE BARRA - QUANTIDADE DE USUÁRIOS SEGMENTADO POR IDADE
  fetch("/usuarios/segmentadoPorIdade").then(function (resposta) {
    if (resposta.ok) {
      if (resposta.status == 204) {
        console.log('Nenhum resultado encontrado.')
      }

      resposta.json().then(function (resposta) {
        console.log("GRÁFICO DE BARRA - QUANTIDADE DE USUÁRIOS SEGMENTADO POR IDADE: ", JSON.stringify(resposta));

        for (var i = 0; i < resposta.length; i++) {
          var qtd_usuarios_idade = resposta[i].totalUsuario;
          var idade = resposta[i].idade;

          dados_dsp_idade.labels.push(idade);
          dados_dsp_idade.datasets[0].data.push(qtd_usuarios_idade);
          grafico_desempenho_barra.update()
          

        }

      })

    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}