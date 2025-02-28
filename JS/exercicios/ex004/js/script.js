function tabuada() {
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#seltab')

    if (num.value <= 0) {
        alert('[ERRO] Informe um número válido!')
    } else {
        let n = Number(num.value)
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}