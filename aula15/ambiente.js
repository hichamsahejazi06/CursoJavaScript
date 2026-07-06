let num = [4 ,6 ,3 ,1]
num[4] = 9
num.push(7)
num.sort()
console.log(`Nosso vetor é ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)

let pos = num.indexOf(6)
if (pos == -1) {
    console.log('Não foi encontrado!!')
} else {
    console.log(`Nosso valor esta na posição ${pos}`)
}
