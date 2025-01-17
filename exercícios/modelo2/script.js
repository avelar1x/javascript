function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.createElement
        ('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bebe-m.jpg')
            } else if(idade <21){
                img.setAttribute('src', 'jovem-m.jpg')
            }else if(idade <50){
                img.setAttribute('src', 'adulto-m.jpg')
            } else if(idade >50){
                img.setAttribute('src', 'idoso-m.jpg')
            }
        }else if (fsex [1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bebe-f.jpg')
            } else if(idade <21){
                img.setAttribute('src', 'jovem-f.jpg')
            }else if(idade <50){
                img.setAttribute('src', 'adulto-f.jpg')
            } else if(idade >50){
                img.setAttribute('src', 'idosa-f.jpg')
            }
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    

}