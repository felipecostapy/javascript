function carregar(){
     var msg = window.document.getElementById('mensagem')
     var img = window.document.getElementById('imagem')
     var data = new Date()
     var hora = data.getHours()
     msg.innerHTML = `Agora são ${hora} horas!`
     mensagem_chegada = window.document.getElementById('mensagem_recepcao')

     if(hora >= 0 && hora < 12){
          // BOM DIA
          img.src = 'manha.png'
          document.body.style.background = '#FCC884'
          mensagem_chegada.innerHTML = 'Bom dia!!'
     } else if(hora >= 12 && hora <= 18){
          // BOA TARDE
          img.src = 'tarde.png'
          document.body.style.background = '#C48153'
          mensagem_chegada.innerHTML = 'Bom tarde!!!'
     } else {
          //BOA NOITE
          img.src = 'noite.png'
          document.body.style.background = '#0D0D31'
          mensagem_chegada.innerHTML = 'Boa noite!!!!'
     
     }
}