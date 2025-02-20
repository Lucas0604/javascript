// solicitando os numeros para o usuario
let num1 = prompt('Informe um numero:');
let num2 = prompt('Informe outro numero:');

// passando os numeros do tipo string para o tipo number
num1 = parseInt(num1);
num2 = parseInt(num2);

// agora vamos fazer o calculo e alocarmos em uma variavel e exibir o resultado na tela
const resultado = num1 + num2;

alert(`O resultado da soma é ${resultado}`);

