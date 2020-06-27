const title = document.querySelector('h1')
const n1 = document.querySelector('#primer-numero')
const n2 = document.querySelector('#segundo-numero')
const sumBtn = document.querySelector('#sum-btn')
const diffBtn = document.querySelector('#diff-btn')
const prodBtn = document.querySelector('#prod-btn')
const divBtn = document.querySelector('#div-btn')
const resultNode = document.querySelector('#result')

// Sum operation
sumBtn.addEventListener('click', function (){
  // numeros transformados a enteros
  const n1Int = parseInt(n1.value)
  const n2Int = parseInt(n2.value)
  //operacion
  const result = n1Int + n2Int
  console.log(result)

  // creación de nodo <span>{resultado}<span>
  const textContent = document.createTextNode(result)
  const spanElement = document.createElement('span')
  spanElement.appendChild(textContent)

  // Eliminar resultado previo
  if(resultNode.childNodes.length > 3){
    resultNode.removeChild(resultNode.childNodes[3])
  }

  resultNode.appendChild(spanElement)
  return result
})

// Resta operation
diffBtn.addEventListener('click', function (){
  // numeros transformados a enteros
  const n1Int = parseInt(n1.value)
  const n2Int = parseInt(n2.value)
  //operacion
  const result = n1Int - n2Int
  console.log(result)

  // creación de nodo <span>{resultado}<span>
  const textContent = document.createTextNode(result)
  const spanElement = document.createElement('span')
  spanElement.appendChild(textContent)

  // Eliminar resultado previo
  if(resultNode.childNodes.length > 3){
    resultNode.removeChild(resultNode.childNodes[3])
  }

  resultNode.appendChild(spanElement)
  return result
})

// Multiplicacion operation
prodBtn.addEventListener('click', function (){
  // numeros transformados a enteros
  const n1Int = parseInt(n1.value)
  const n2Int = parseInt(n2.value)
  //operacion
  const result = n1Int * n2Int
  console.log(result)

  // creación de nodo <span>{resultado}<span>
  const textContent = document.createTextNode(result)
  const spanElement = document.createElement('span')
  spanElement.appendChild(textContent)

  // Eliminar resultado previo
  if(resultNode.childNodes.length > 3){
    resultNode.removeChild(resultNode.childNodes[3])
  }

  resultNode.appendChild(spanElement)
  return result
})

// Division operation
divBtn.addEventListener('click', function (){
  // numeros transformados a enteros
  const n1Int = parseInt(n1.value)
  const n2Int = parseInt(n2.value)
  //operacion
  const result = n1Int / n2Int
  console.log(result)

  // creación de nodo <span>{resultado}<span>
  const textContent = document.createTextNode(result)
  const spanElement = document.createElement('span')
  spanElement.appendChild(textContent)

  // Eliminar resultado previo
  if(resultNode.childNodes.length > 3){
    resultNode.removeChild(resultNode.childNodes[3])
  }

  resultNode.appendChild(spanElement)
  return result
})

// JS Mouse events
title.addEventListener('click', function(){
  console.log('click sobre el título')
})