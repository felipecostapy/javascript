let num = [1, 2, 3, 4, 5, 7, 12]
console.log(`O nosso vetor tem ${num.length} índices`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O ultimo valor do vetor é ${num.length - 1}`)

/*for(let pos=0;pos < num.length; pos++){
     console.log(num[pos])
}
*/
for(let pos in num){
     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let vInp = num.indexOf(1)
console.log(vInp)