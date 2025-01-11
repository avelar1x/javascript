var corpo = window.document.body
var p1 = window.document.getElementsByTagName('p')[0]
            window.document.write('Está escrito assim: ' + p1.innerText)
            corpo.style.background = 'black'
            p1.style.color = 'blue'
//var d = window.document.getElementById('msg')
//d.style.background = 'green'
//d.innerText = 'Estou aguardando'
var d = window.document.querySelector('div#msg')
d.style.color = 'green'
d.style.background = 'lightgrey'
