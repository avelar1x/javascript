function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = "image/dia.jpg"
        document.body.style.background = '#636a86'
    } else if(hora >=12 && hora <18){
        //Boa Tarde!
        img.src = 'image/tarde.jpg'
        document.body.style.background = '#cd6c1f' 
    } else{
        //Boa noite!
        img.src = 'image/noite.jpg'
        document.body.style.background = '#19394e'
    }
}