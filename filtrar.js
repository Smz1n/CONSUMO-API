function filtrar() {
    //valor que o usuario digitou
    let expressao = input_busca.value.toLowerCase();

    //Pegando todas as linhas da tabela
    let linhas = tabela_compras.getElementsByTagName('tr');

    for (let posicao in linhas) {
        if (isNaN(posicao) ) {
            continue;
        }

        //numero de colunas para cada item tipo: item, quantidade,e telefone

        let coluna1 = linhas[posicao].children[1].innerText.toLowerCase()
        let coluna2 = linhas[posicao].children[2].innerText.toLowerCase()

        let colunas = coluna1 + coluna2;
        // let linha = linhas[posicao].innerText.toLowerCase();

        if( colunas.includes(expressao)) {
            linhas[posicao].style.display = '';
        }else {
            linhas[posicao].style.display = 'none'
        }
    }

}

