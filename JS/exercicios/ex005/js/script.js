let num = document.getElementById('numero')
let sel = document.getElementById('sel')
let msg = document.getElementById('msg')
// let selectArray = [sel]

function adicionar() {
    let item = document.createElement('option')
    item.innerHTML = `<p>Valor ${num.value} adicionado</P>`
    sel.appendChild(item)
}

function finalizar() {
    // pegar o maior e o menor numero
    // let max = Math.max(selectArray)
    // let min = Math.min(selectArray)
    msg.innerHTML = `<p>Ao todo temos ${sel.length} números cadastrados</p>`
    msg.innerHTML += `<p>O ${max} foi o maior numero digitado</p>`
}