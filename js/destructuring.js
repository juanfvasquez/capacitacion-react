const obj = {
  id: 1,
  nombre: 'Juan',
  correo: 'juan@mail.com',
}

console.log(obj)

function sinDestructuring() {
  const id = obj.id
  const nombre = obj.nombre

  console.log(id, nombre)
}

function conDestructuring() {
  const { id, nombre } = obj
  // const { id: _id, nombre: nombre2 } = obj
  console.log(id, nombre)
}

function imprimirObj({ id, nombre, correo }) {
  // console.log(`${objeto.id} - ${objeto.nombre} ${objeto.correo}`)
  console.log(`${id} - ${nombre} ${correo}`)
}

imprimirObj(obj)