let num = [5, 8 ,3, 4, 1]
let ind = 0
// num.sort()
// console.log(num)
// console.log(`O vetor tem ${num.length} posições`)
// console.log(`O primeiro valor do vetor é ${num[0]}`)

// for (let i = 0; i < num.length; i++) {
//     console.log(i)
// }

// while (ind < num.length) {
//     console.log(ind)
//     ind++
// }

for (let pos in num) {
    console.log(`A posicão ${pos} tem o valor ${num[pos]}`)
}

console.log(num.indexOf(3))