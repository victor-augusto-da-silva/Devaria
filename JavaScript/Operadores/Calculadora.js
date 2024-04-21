
const readline = require ('readline').createInterface({
    input : process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) =>
{ 
        const resultado= Number.parseFloat(numero);
        if(!resultado)  {
            console.log('Numero invalido')
        }
       return  resultado
    
    
    
}

const valirdarOperador = (operador) => {
    switch(operador) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
            default:
                console.log('operador informado é invalido');
                return null;
    }
}

readline.question('Favor informar um numero:' , (numero1) => {
   
    const numeroValido1 = validarNumeroInformado(numero1);
    if (numeroValido1)
    {
       readline.question('Favor Informar outro numero:',(numero2) => 
       {
        const numeroValido2 = validarNumeroInformado(numero2);  
            if(numeroValido2){
                readline.question('Favor informar o operador: ', (operador) =>{
                    const operadorValidado = valirdarOperador (operador);
                    if(operadorValidado){
                        switch(operadorValidado) {
                            case '+': console.log(`Operador selecionado adição = ${numeroValido1} + ${numeroValido2} = ${numeroValido1 + numeroValido2}`);
                            break;
                            case '-':console.log(`Operador selecionado subtração = ${numeroValido1} - ${numeroValido2} = ${numeroValido1 - numeroValido2}`);
                            break;
                            case '*':console.log(`Operador selecionado multiplicação = ${numeroValido1} * ${numeroValido2} = ${numeroValido1 * numeroValido2}`);
                            break;
                            case '/':console.log(`Operador selecionado divisão = ${numeroValido1} / ${numeroValido2} = ${numeroValido1 / numeroValido2}`);
                            break;
                            case '%':console.log(`Operador selecionado módulo = ${numeroValido1} % ${numeroValido2} = ${numeroValido1 % numeroValido2}`);
                            break;
                            default:break;
                        }
                    }
                });
            }
        })
    }
    
   
})