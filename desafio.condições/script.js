var local = document.querySelector ('país')
var país = ('Brasil')

function calcular () {
    var local = document.querySelector('input#país')
    var res = document.querySelector ('div#res')
    var país = (local.value)
    res.innerHTML = ` <p>Você é <strong> Brasileiro.</strong></p>`
    if (país != 'Brasil'){
        res.innerHTML = `Você é <strong>Estrangeiro</strong>!`
    }

}
