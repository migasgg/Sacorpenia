const cName = document.querySelector('#name')
const massaCorporal = document.querySelector('#massaCorporal')
const etnia = document.querySelector('#etnia')
const est = document.querySelector('#est')
const sexo = document.querySelector('#sexo')
const idade = document.querySelector('#idade')
const btnPrint = document.querySelector('#imprimir')

btnPrint.addEventListener('click', massaMuscularEsqueletica)

function massaMuscularEsqueletica(event) {
  event.preventDefault()
  
  const altura = est.value.split('')
  altura.splice(1, 0, ".")
  const massaCorporalValue = Number(massaCorporal.value)
  const alturaValue = Number(altura.join(''))
  const idadeValue = Number(idade.value)
  const sexoValue = Number(sexo.value)
  const etniaValue = Number(etnia.value) 

  const mme = ((((0.244 * massaCorporalValue) + (7.8 * alturaValue)) - ((0.098 * idadeValue) + ((6.6 * sexoValue) + etniaValue))) - 3.3).toFixed(2)
}