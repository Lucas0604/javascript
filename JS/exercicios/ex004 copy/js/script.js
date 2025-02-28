function contador() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var msg = document.getElementById('msg')

    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else { 
        msg.innerHTML = `Contando... `
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        //Realizar a lógia do FOR e testar
        if (i < f) {
            for (var c = i; c <= f; c+=p) {
                
                msg.innerHTML += `${c}  `
            }
        } else {
            for (var c = i; c <= f; c-=p) {
                
                msg.innerHTML += `${c}  `
            }
        }

    }
}