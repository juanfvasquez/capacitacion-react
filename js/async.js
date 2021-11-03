/* 
async / await 
*/

async function ejecutarAsync() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Ok')
    }, 2000)
  })

  console.log('Antes de la promesa...')
  try {
    const respuesta = await promise
    console.log(respuesta)
  } catch (error) {
    alert('Hubo un error')
    console.error(error)
  }
  console.log('Después de la promesa')
}

console.log('Antes de la función')
ejecutarAsync()
console.log('Después de la función')
