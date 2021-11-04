setTimeout(() => {
  const div = document.getElementById('div')

  const texto = document.createElement('h1')
  texto.innerHTML = 'Insertado con JS'
  div.appendChild(texto)
}, 5000)

// Number
var entero = -10
var decimal = 10.1

// String
var cadena = 'Cadena'
var otraCadena = "otra cadena " + entero + " esta es concatenada"
var otraCadenaMas = `otra cadena mas ${entero} esta es concatenada`
var caracter = 'c'
var otroCaracter = "c"
var otroCaracterMas = `c`

// boolean
var bandera = true
bandera = false
bandera = entero === -10

var lista = [entero, 100, '', false]
lista[0] // entero : -10
lista[3] // false

var obj = {
  'clave1': entero,
  'clave2': cadena,
}

// obj['clave1'] // entero
// obj['clave2'] // Cadena
// obj.clave1
// obj.clave2

obj['clave3'] = 'Otro elemento'
obj.otraClave = true
obj.clave5 = null

console.log(obj)
console.log(obj['noExiste'])

const nombre = 'Juan'
const apellido = 'Vasquez'

const persona = { nombre, apellido }

console.log(persona)