function publicar() {
    var receita = {
        titulo: nome_receita_input.value,
        dieta: dieta_select.value,
        descricao: desc_textarea.value,
        ingredientes: listaIngredientes,
        foto: foto_input.value,
        modo_preparo: modoPreparo_textarea.value
    }

    fetch(`/receitas/publicar`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(receita)
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.location = "./receitas.html";
         
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    
    });

    return false;

}