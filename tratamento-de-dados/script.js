var nome = window.prompt("Qual é seu nome?")
document.write(`Olá ${nome} Seu nome tem ${nome.length} letras`)
document.writeln(`Seu nome em maiúsculo é ${nome.toUpperCase()}`) 
document.writeln(`Seu nome em minúsculo é ${nome.toLowerCase()}`)
window.alert("É um grande prazer em te conhecer, " + nome + "!") 
var n1 = Number(window.prompt("Digite outro número"))
var n2 = Number(window.prompt("Digite outro número"))
var s = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}`)