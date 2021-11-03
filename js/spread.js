const lista = [10, 20, 30]
// Spread operator
// lista.push(40)
const lista2 = [...lista, 40]

const lista3 = [...lista, ...lista2, 100, 200]
console.log(lista)
console.log(lista2)

const listaClon = [...lista3]

listaClon.splice(0, 1)
console.log(lista3)
console.log(listaClon)


const obj = {
  id: 10,
  nombre: 'Juan'
}

// const clon = obj
// clon = { ...obj }

const obj2 = { ...obj, apellido: 'Vásquez' }

const obj3 = { ...obj, ...obj2, edad: 20 }

console.log(obj)
console.log(obj2)
console.log(obj3)