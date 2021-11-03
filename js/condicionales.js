let bandera = true
let num = 10
// if (bandera) {
//   console.log('Es verdadero')
// }

// bandera = true

// if (!bandera) {
//   console.log('Es falso')
// }

if (num !== 10) {
  console.log('es mayor')
} else {
  console.log('Es menor')
}

const obj = {
  id: 1,
  nombre: 'Juan',
}

if (obj.apellido) {
  console.log('Existe el apellido')
} else {
  console.log('NO existe el apellido')
}

let num1 = 10
let num2 = 20
const mayor = num1 > num2 ? num1 : num2
const apellido = obj.apellido ? obj.apellido : 'Sin apellido'

const apellido2 = obj.apellido || 'Sin apellido'

console.log(apellido2)