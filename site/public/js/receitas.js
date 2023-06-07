function publicar() {
  const formData = new FormData();
  formData.append('nome', nome_receita_input.value)
  formData.append('dieta', dieta_select.value)
  formData.append('descricao', desc_textarea.value)
  formData.append('ingredientes', listaIngredientes)
  formData.append('modo_preparo', modoPreparo_textarea.value)
  formData.append('foto', foto.files[0])

  fetch("/receitas/publicar", {
    method: 'POST',
    body: formData
  }).then((result) => {
    console.log(result);

    if (result.ok) {
      console.log("receita cadastrada com sucesso")
      window.location = "./receitas.html"

    } else {
      throw ("Houve um erro ao tentar realizar o cadastro!")
    }
  }).catch((error) => {
    console.log(error);
    throw ("Houve um erro ao tentar realizar o cadastro!")
  })
}

function deletar(id) {
  console.log("Criar função de apagar post escolhido - ID " + id);
  fetch(`/receitas/deletar`, {
    method: "DELETE",
    body: JSON.stringify({
      idReceita: id
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (resposta) {
    if (resposta.ok) {
      window.alert("Receita deletada com sucesso");
      window.location = "./receitas.html"
    } else if (resposta.status == 404) {
      window.alert("Deu 404!");
    } else {
      throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });
}



function listarTodasReceitas() {
  fetch("/receitas/listar").then(function (resposta) {
    if (resposta.ok) {
      if (resposta.status == 204) {
        console.log('Nenhum resultado encontrado.')
      }

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));


        for (var i = 0; i < resposta.length; i++) {
          var receita = resposta[i]

          console.log(receita);
          cards.innerHTML += `
            <div class="box_receitas">
            <img src="../uploads/${receita.foto}" alt="">

            <div class="titulo_receita">
                <h3>${receita.nomeReceita}</h3>
            </div>

            <div class="detalhes_receitas">
                <h4>${receita.tipoDieta}</h4>
                <p>${receita.descricao}</p>
                <div class="btt_cards">
                    <button id="excluir" onclick="deletar(${receita.id})"> 
                      <i class="bi bi-trash"></i>
                      Excluir
                    </button>
                </div>

            </div>
        </div>`
        }
      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function listarParaUserComum(){
  fetch("/receitas/listar").then(function (resposta) {
    if (resposta.ok) {
      if (resposta.status == 204) {
        console.log('Nenhum resultado encontrado.')
      }

      resposta.json().then(function (resposta) {
        console.log("Dados recebidos: ", JSON.stringify(resposta));

        for (var i = 0; i < resposta.length; i++) {
          var receita = resposta[i]

          console.log(receita);
          cards.innerHTML += `
            <div class="box_receitas">
            <img src="../uploads/${receita.foto}" alt="">

            <div class="titulo_receita">
                <h3>${receita.nomeReceita}</h3>
            </div>

            <div class="detalhes_receitas">
                <h4>${receita.tipoDieta}</h4>
                <p>${receita.descricao}</p>
                <div class="btt_cards">
                    <button onclick="redirectReceita(${receita.id})"> 
                      Ver receita
                      <i class="bi bi-arrow-right-short"></i>
                    </button>
                </div>

            </div>
        </div>`
        }

      });
    } else {
      throw ('Houve um erro na API!');
    }
  }).catch(function (resposta) {
    console.error(resposta);
  });
}


function redirectReceita(id_bebida){
  sessionStorage.ID_RECEITAS = Number(id_bebida);
  window.location = "visualizar_receita.html"
  
}



function visualizarReceita(id) {
  var img = document.getElementById('img_receita');
  var titulo = document.getElementById('nome_receita');
  var dieta = document.getElementById('dieta');
  var ingredientes = document.getElementById('ingrediente');
  var modo_preparo = document.getElementById('modo_preparo');

  fetch(`/receitas/visualizar/${id}`)
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          console.log('Nenhum resultado encontrado.')
        }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));

          img.innerHTML = `<img src="../uploads/${resposta[0].foto}" alt="">`;
          titulo.innerHTML = resposta[0].nomeReceita;
          dieta.innerHTML = resposta[0].dieta;


          const listaIngredientes = resposta[0].ingredientes.split(",")
          console.log(listaIngredientes)
        
          for (var i = 0; i < listaIngredientes.length; i++) {
            ingredientes.innerHTML += listaIngredientes[i] + "<br>";
          }

          modo_preparo.innerHTML = resposta[0].modo_preparo;


        });

      } else {
        throw ('Houve um erro na API!');
      }
    }).catch(function (resposta) {
      console.error(resposta);
    });

    
}


