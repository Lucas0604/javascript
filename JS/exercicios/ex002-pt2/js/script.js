function verificar() {
    var diaSemana = document.getElementById('diaSemana');
    var res = document.getElementById('res');

    switch(diaSemana) {           
        case 1:
            alert('Domingo');
            break;
        case 2: 
            alert('Segunda-Feira');
            break;
        case 3:
            alert('Terça-Feira');
            break;
        case 4:
            alert('Quarta-Feira');
            break;
        case 5:
            alert('Quinta-Feira');
            break;
        case 6:
            alert('Sexta-Feira');
            break;
        case 7:
            alert('Sabado');
            break;
        default:
            alert('INFORME UM NUMERO ENTRE 1 e 7!');
    }
}