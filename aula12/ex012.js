var agora = new Date()
var hora = agora.getHours()
console.log(`O Relógio está apontando para as ${hora} horas`)
if (hora < 12) {
    console.log('Então te desejo um Bom Dia!!')
} else if ( hora <= 18) {
    console.log('Então te desejo uma Boa Tarde!!')
} else {
    console.log('Então uma Boa Noite!!')
}
   
