let numero = document.querySelector('input#formnum')
let lista = document.querySelector('select#formlista')
let resultados = document.querySelector('div#resultado')

let valores = []

function isNumero(n){
     if(Number(n) >= 1 && Number(n) <= 100){
          return true
     } else {
          return false
     }
}


function inLista(n, l){
     if(l.indexOf(Number(n)) != -1){
          return true 
     } else {
          return false
     }
}


function adicionar(){
     if(isNumero(numero.value) && !inLista(numero.value, valores)){
          valores.push(Number(numero.value))
          let item = document.createElement('option')
          item.text = `Valor ${numero.value} adicionado!`
          lista.appendChild(item)
          resultados.innerHTML = ''
     } else {
          window.alert('Valor inválido ou já incluso na lista')
     }
     numero.value = ''
     numero.focus()
}

function finalizar(){
     if (valores.length == 0){
          window.alert('Adicione valores antes de finalizar')
     } else {
          let totalElem = valores.length
          let maiorNum = valores[0]
          let menorNum = valores[0]
          let soma = 0
          let media = 0
          for(let pos in valores){
               soma += valores[pos]
              if (valores[pos] > maiorNum)
                    maiorNum = valores[pos]
              if (valores[pos] < menorNum)
                    menorNum = valores[pos]
          media = soma / totalElem
              
          }
          resultados.innerHTML = ''
          resultados.innerHTML += `<p>Ao todo temos ${totalElem} números cadastrados!</p>`
          resultados.innerHTML += `<p>O maior valor informado é ${maiorNum}</p>`
          resultados.innerHTML += `<p>O menor valor informado é ${menorNum}</p>`
          resultados.innerHTML += `<p>A soma de todos os valores é: ${soma} </p>`
          resultados.innerHTML += `<p>A média de todos os valores é: ${media} </p>`


     }
          
}