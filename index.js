function Inserir(){
    event.preventDefault();

    let dados = {
        "item": input_item.value,
        "quantidade": parseInt(input_quantidade.value)
    };

    fetch('http://localhost:8000/compras', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/Json'
        }
    })
    .then(resposta => resposta.json())
    .then(resposta => atualizarlista());

    form_add.reset();
}


async function excluir (id) {
    let resposta = confirm('Vc tem certeza?')
    
    if (resposta !== true) {
        return;
    }

    fetch('http://localhost:8000/compras/'+id, {
        method: 'DELETE'
    });

    atualizarlista();
}


function atualizarlista() {
    tabela_compras.innerHTML = '';
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
                    <button class="btn btn-warning">
                        Editar
                    </button>

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