let valores = [3, 4, 1, 8, 6, 8, 2]
valores.sort()
/*
console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
}
*/
for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}