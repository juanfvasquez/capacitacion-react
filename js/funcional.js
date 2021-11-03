const lista = [1, 2, 3, 4, 5, 6, 7]

// for (let i = 0; i < lista.length; i++) {
//   console.log(lista[i])
// }

// lista.forEach((i, index) => console.log(`${index}: ${i}`))
// lista.forEach(console.log)
lista.forEach((_, i) => console.log(i)) // Solo el índice que es el segundo parámetro

// const listaImpares = []
// for (let i = 0; i < lista.length; i++) {
//   if (lista[i] % 2 !== 0) {
//     listaImpares.push(lista[i])
//   }
// }

const listaImpares = lista.filter(i => i % 2 !== 0)

console.log(listaImpares)

// const nuevaLista = []
// for (let i = 0; i < lista.length; i++) {
//   const el = lista[i]
//   nuevaLista.push([...Array(el).keys()])
// }

const nuevaLista = lista.map(i => [...Array(i).keys()])
// { 'nombre': '', 'edad': 123 }
console.log(lista)
console.log(nuevaLista)

const listaObjetos = [
  { nombre: 'Juan', edad: 10 },
  { nombre: 'PEdro', edad: 10 },
  { nombre: 'Ana', edad: 10 },
  { nombre: 'Lucía', edad: 10 },
]

const listaNombres = listaObjetos.map(i => i.nombre)
console.log(listaNombres)

Object.keys(listaObjetos[0]).forEach(i => console.log(i))
Object.values(listaObjetos[0]).forEach(i => console.log(i))
Object.entries(listaObjetos[0]).forEach(i => console.log(i))