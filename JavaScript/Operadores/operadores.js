/* Operador Unario ! (negacao)

    Binario && (and) ou || (or) 
*/ 
/*
if verificação de condição
switch verificador de caso
*/
 

 

const readline = require ('readline').createInterface(
    {
    input: process.stdin,
    output: process.stdout
}) ;

console.log('Este programa vai checar se você é maior de 18 anos e tem habilitação para saber se você pode entrar no kar');
console.log('Alem da sua idade precisamos verificar se você esta na lista de presença');

 readline.question('Qual o ano do seu nascimento?', ano => {
    if (ano > 2006){
        console.log('Você não tem 18 anos');
        return;
    }
    else{
        readline.question("Você é habilitado? (Sim/Não)",temHabilitacao => {
        /*Negação*/
        if(!(temHabilitacao.toUpperCase() === 'SIM')){
            console.log('Você não tem habilitação para o kart')
        }
        else {
            readline.question('Qual o seu nome?',nome => {
                switch(nome){
                    case 'Victor':console.log(`Bem vindo ao Kart ${nome}` ); 
                        break;
                    case 'Edu' : console.log(`Bem vindo ao Kart${nome}`); break;
                    default :console.log('Seu nome não foi identificado na lista');
                    break;
                }  
            })
        }
    }
    )
    }
 })