// while, for 

let bandera = true
let i = 0

while (bandera) {
  console.log(i++)
  if (i === 100) {
    bandera = false
  }
}

for (; ;) {
  if ([102, 103, 104].includes(i)) {
    i++
    continue
  }
  console.log(i++)
  if (i > 105) {
    if (i == 108) {
      break
    }
  }
}

for (el in listaObjetos[0]) { // Recorrer objetos
  console.log(el, listaObjetos[0][el])
}

for (el of listaObjetos) { // Recorrer listas
  console.log(el)
}