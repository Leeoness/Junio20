const title = document.querySelector('h1')
const n1 = document.querySelector('#primer-numero')
const n2 = document.querySelector('#segundo-numero')
const sumBtn = document.querySelector('#sum-btn')

// Sum operation
sumBtn.addEventListener('click', function (){
  // numeros transformados a enteros
  const n1Int = parseInt(n1.value)
  const n2Int = parseInt(n2.value)
  //operacion
  const result = n1Int + n2Int
  console.log(result)

})

// JS Mouse events
title.addEventListener('click', function(){
  console.log('click sobre el título')
})