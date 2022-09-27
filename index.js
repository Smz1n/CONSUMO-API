function excluir (id) {
    fetch('http://localhost:8000/compras'+id, {
        method: 'DELETE'
    });

    atualizarlista();
}


function atualizarlista() {
    fetch('http://localhost:8000/compras')
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (lista) {
        lista.forEach(function (cadaItem) {
            tabela_compras.innerHTML += `
            <tr>
                <td>${cadaItem.id}</td>
                <td>${cadaItem.item}</td>
                <td>${cadaItem.quantidade}</td>
                <td>
                    <button onclick="excluir(${cadaItem.id})" class="btn btn-danger">
                        Excluir
                    </button>
                </td>
            </tr>
         `;
        });
    });
}

atualizarlista();