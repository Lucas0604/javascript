function parOuImpar(num){
    let n = document.getElementById('numero')
    num = Number(n.value)
    if (num % 2 == 0) {
        alert(`O ${num} é Par`)
    } else {
        alert(`O ${num} é Impar`)
    }
}