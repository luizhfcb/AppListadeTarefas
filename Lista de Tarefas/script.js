let progresso = []
let concluida = []



function addTarefa() {
    var tarefa = document.getElementById('tarefas').value;
    if (tarefa == '') {
        alert('insira uma tarefa')
    } else {
        //document.getElementById('recebetarefas').value += '\n' + tarefa
        progresso.push(tarefa)
        attTarefasProgresso()

    }
}

function attTarefasProgresso() {
    document.getElementById('ip').innerHTML = ''
    for (let i = 0; i < progresso.length; i++) {
        var butao = `<button class="botoestarefa" onMouseOver="mouseover(${i})">${progresso[i]}</button>`
        document.getElementById('ip').innerHTML += butao;
    }
}

function mouseover(indice) {
    
    document.getElementById('ip').children[indice].disabled = true;
    document.getElementById('ip').children[indice].innerHTML =
        `<div>
        <button onclick="concluirTarefa(${indice})" class="buttonOpcoes">Concluir</button>
        <button class="buttonOpcoes"> Editar</button>
        <button class="buttonOpcoes" onclick="removerTarefa(${indice});"> Excluir</button> 
        </div>`
}

function removerTarefa(indice){
    progresso.splice(indice,1)
    attTarefasProgresso()
}


function concluirTarefa(indice) {
    concluida.push(progresso[indice])
    progresso.splice(indice, 1)
    document.getElementById('concluidas').innerHTML = ''
    for (let i = 0; i < concluida.length; i++) {
        document.getElementById('concluidas').innerHTML += `<button class="botoestarefa">${concluida[i]}</button><br>`
    }
    attTarefasProgresso()

}