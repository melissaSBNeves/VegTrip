//GRÁFICO DE LINHAS - DESEMPENHO GERAL
const labels_desempenho_geral =[1,2,3,4,5,6,7];
    
const dados_desempenho_geral = {
    labels: labels_desempenho_geral,
    datasets: [{
        label: 'Quantidade de usuários',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const desempenho_geral = {
    type: 'line',
    data: dados_desempenho_geral,
    options:{
        responsive: true, 
    }   
};


//GRÁFICO DE PIZZA - DESEMPENHO SEXO
const dados_desempenho_sexo = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };


  const desempenho_sexo = {
    type: 'pie',
    data: dados_desempenho_sexo,
    options:{
        responsive: true,
    }
  };


  //GRÁFICO DE BARRAS - DESEMPENHO POR IDADE
  const labels_dp_idades = [12,41, 29, 28,12];
  const dados_dsp_idade = {
    labels: labels_dp_idades,
    datasets: [{
      label: 'Quantidade de usuários',
      data: [65, 59, 80, 81, 56, 55, 40],
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