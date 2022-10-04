function acionarBotaoExcluir (){
    // document.getElementById('btn_remove_all').remove('d-none');

    let todosChecks = document.querySelectorAll('[data-check="acao"]');

    let quantidade = 0;

    todosChecks.forEach((cadaCheck) => {
    cadaCheck.checked === true && quantidade++;
    })

    if (quantidade > 0) {
        btn_remove_all.classList.remove('d-none');
    }else {
        btn_remove_all.classList.add('d-none');
    }


}

function excluirSelecionados() {
    if (false === confirm('tem certeza')){
        return;
    }

    let todosChecks = document.querySelectorAll('[data-check="acao"]');

    todosChecks.forEach((cadaCheck) => {
        if (cadaCheck.checked === true) {
            fetch (API_URL + '/compras/' + cadaCheck.value, {
                method: 'DELETE'
            })
        }
    });
    atualizarlista();
}