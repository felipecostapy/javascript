function verificar(){
     var data = new Date()
     var ano = data.getFullYear()
     var fano = document.getElementById('txt-ano')
     var res = document.querySelector('div#res')
     if (fano.value.length == 0 || fano.value > ano){
          window.alert('Verifique os dados e tente novamente')
     } else {
          var fsex = document.getElementsByName('rad-sex')
          var idade = ano - Number(fano.value)
          var genero = ''
          var img = document.createElement('img')
          img.setAttribute('id', 'foto')
          if (fsex[0].checked){
               genero = 'Homem'
               if (idade >= 0 && idade < 10){
                    // criança
                    img.setAttribute('src', 'bebe-m.png')
               } else if (idade < 21){
                    // Jovem
                    img.setAttribute('src', 'jovem-m.png')
               } else if (idade < 50){
                    // adulto
                    img.setAttribute('src', 'adulto-m.png')
               } else {
                    // Idoso
                    img.setAttribute('src', 'idoso-m.png')
               }
          } else if (fsex[1].checked){
               genero = 'Mulher'
               if (idade >= 0 && idade < 10){
                    // criança
                    img.setAttribute('src', 'bebe-f.png')
               } else if (idade < 21){
                    // Jovem
                    img.setAttribute('src', 'jovem-f.png')
               } else if (idade < 50){
                    // adulto
                    img.setAttribute('src', 'adulto-f.png')
               } else if (idade > 50){
                    // Idoso
                    img.setAttribute('src', 'idosa-f.png')
               }
              
          }
          res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
          res.appendChild(img)
     
     }
 }