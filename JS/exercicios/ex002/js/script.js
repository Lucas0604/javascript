function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '../img/menino-corte.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '../img/menino-corte.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '../img/homem-corte.jpg')
            } else {    
                //idoso
                img.setAttribute('src', '../img/idoso-corte.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '../img/menina-corte.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '../img/menino-corte.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '../img/mulher-corte.jpg')
            } else {
                //idosa
                img.setAttribute('src', '../img/idosa-corte.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}