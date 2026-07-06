function contar() {
    var txti = document.getElementById('inicio')
    var txtf = document.getElementById('fim')
    var txtp = document.getElementById('passo')
    var res = document.getElementById('contagem')
        if ( txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0 ) {
            res.innerHTML = 'Impossivel Contar!!'
            // window.alert('Confira se adicionou algum valor aos espaços')
        }
        else {
            res.innerHTML = 'Contando: <br> '
            var inicio = Number(txti.value)
            var fim = Number(txtf.value)
            var passo = Number(txtp.value)
            if ( passo == 0 ) {
                window.alert('Passo Inválido!! Considerarei o Passo como 1')
                p = 1
                 }
            if (inicio < fim ) {   // contagem crescente
                for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += ` ${c}  \u{1F910} `
                }
            } else {  
                for (var c = inicio; c >= fim; c-= passo) {
                res.innerHTML += ` ${c}  \u{1F910} ` 
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }
}  



