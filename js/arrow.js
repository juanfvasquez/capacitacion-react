// Arrow functions - funciones flecha

const accion = () => {
  console.log('Función Flecha')
}

// console.log(accion())
accion()

const unaLinea = () => 'Retorno flecha'
const unParametro = param => console.log(param)
const parametros = (param1, param2) => console.log(param1, param2)
const bodyComplejo = (param1, param2) => {
  // Hacer algo
  console.log(param1, param2)
}

console.log(unaLinea())
unParametro('Parámetro en función flecha')
parametros('Hola', 'Mundo!')

