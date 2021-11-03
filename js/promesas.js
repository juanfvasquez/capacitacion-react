const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'

// console.log('Inicio del archivo')
// fetch(url)
//   .then(res => res.json())
//   .then(resJson => imprimirResultado(resJson))
// console.log('Fin del archivo')


// function imprimirResultado(resJson) {
//   console.log(resJson)
//   document.write(`<h1>Hay ${resJson.count} Pokemón</h1>`)
// }

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Salio Mal')
  }, 5000)
})

console.log('Antes de la promesa...')
promise.then(respuesta => {
  console.log(respuesta)
  alert(respuesta)
}).catch(error => {
  console.error(error)
  alert('Hubo un error')
})
console.log('Después de la promesa')

// Promise.all([promiseClientes, promiseCategorias, promiseRelacionados]).then()

