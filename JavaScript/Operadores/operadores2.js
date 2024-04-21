/*Operadores de comparação
== equivalencia (valor)
=== comparação (valor e tipo)
!= (valores diferentes)
!== (valor e tipo)
*/
const teste = false;

function validar (valido)
/*valido = variavel de entrada da função*/
{
    if(valido == true){
    return true;
    }else {
        return false;
    }
}

/*Arrow function*/

const validar = (valida) =>{
    if(valido == true){
        return true;
    }else{
        return false;
    }
}
 
console.log(validar(teste));
console.log(validar(teste));



