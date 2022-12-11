/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
const array=[0,1,2,"hola"];
console.log(array);
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:

  const vAux=[];
  let numero;
  for (let i=0;i<=array.length-1;i++){
    numero=array[i];
    if (Number.isInteger(numero)){
        vAux[i]=numero;
       }
  }
  return vAux;
  
}
console.log(soloNumeros(array));
// No modifiques nada debajo de esta linea //


module.exports = soloNumeros