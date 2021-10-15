function punto1(arrayCasas, dias) {

  for (var i = 0; i < dias; i++) {
    let temp = arrayCasas,
      finalArray = new Array();

    for (let j = 0; j < arrayCasas.length; j++) {
      if (j == 0) anterior = 0;
      else anterior = arrayCasas[j - 1];

      if (j == arrayCasas.length - 1) siguiente = 0;
      else siguiente = arrayCasas[j + 1];

      /* console.log("Anterior: "+ anterior)
            console.log("j: "+ arrayCasas[j])
            console.log("siguiente: "+ siguiente)*/

      if (anterior == siguiente) {
        finalArray[j] = 0;
      } else {
        finalArray[j] = 1;
      }
    }

    arrayCasas = finalArray;
  }
  return arrayCasas;
}

//test1

console.log("Test 1")
arrayCasas1 = [1, 0, 0, 0, 0, 1, 0, 0];
dias1 = 1;

console.log(punto1(arrayCasas1, dias1))

//test2
console.log("Test 2")
arrayCasas2 = [1, 1, 1, 0, 1, 1, 1, 1];
dias2 = 2;
console.log(punto1(arrayCasas2, dias2));
