let num = [5, 6, 3, 3, 4]
num.push(0)
num.sort()


console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(10)
    if(pos == -1) {
    console.log("O valor não foi encontrado!")
    } else{
        console.log(`A posição do valor 4 é ${pos}`)
    }
