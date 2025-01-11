var a = document.querySelector('div#area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'red'
    a.style.color = 'white'
}

function entrar() {
    a.innerText = 'Entrou!'
    a.style.background = 'yellow'
    a.style.color = 'black'
}

function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}