var otraFuncion

function imprimir() {
  console.log('Función imprimir')
}

function parametros(variable1 = '1 -> Vacío', variable2 = '2 -> Vacío') {
  console.log(variable1, variable2)
}

imprimir()
parametros('Hola', 'mundo')
parametros('Hola', true)
parametros(10000, -123)

const obj1 = {
  id: '0000001',
  nombre: 'Juan'
}

const obj2 = {
  numero: 123,
  valor: 'Otro'
}

parametros(obj1, obj2)

function llamado(accion) {
  accion()
}

function retorno() {
  return parametros
}

llamado(imprimir)

retorno()(null, null)

function funcionAnidada() {
  console.log('Función Anidada')

  function interior() {
    console.log('Función interior')
  }

  otraFucion = interior
}

funcionAnidada()
otraFucion()

function objeto() {
  const data = {
    getNombre: function () {
      return 'Juan'
    },
    getEdad: function () {
      return 20
    }
  }
  return data
}

const user = objeto()
console.log(user.getNombre(), user.getEdad())