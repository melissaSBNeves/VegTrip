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
      body:JSON.stringify({
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
                    <button id="editar">
                      <i class="bi bi-pencil-square"></i>
                      Editar
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

