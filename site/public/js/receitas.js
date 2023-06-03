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
    } else {
      throw ("Houve um erro ao tentar realizar o cadastro!")
    }
  }).catch((error) => {
    console.log(error);
    throw ("Houve um erro ao tentar realizar o cadastro!")
  })
}

function listarTodasReceitas(){
  fetch("/receitas/listar").then(function (resposta) {
    if (resposta.ok) {
        if (resposta.status == 204) {
           console.log('Nenhum resultado encontrado.')
        }

        resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));


            teste.innerHTML = `<img src="../uploads/${resposta[0].foto}" alt="">`

      

        });
    } else {
        throw ('Houve um erro na API!');
    }
}).catch(function (resposta) {
    console.error(resposta);
});
}