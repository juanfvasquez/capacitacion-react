// var const let
(function () {
  var numero = 10
  let numero2 = 20

  function imprimir() {
    console.log(numero2)
    numero2 = 50
    console.log(numero2)
  }

  imprimir()

  console.log(numero2)

  // COnstantes
  const numero3 = 30
  // numero3 = 10 // Error
})()