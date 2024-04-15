/*
Exercicio:

Criar um novo programa
Executar em linha de comando
Capturar as informações passadas pelo usuario e exibilas no console

*/  
 
 
 
 
 
 /*
 require - Importação de uma biblioteca do node
 Readline - Função 
 CreateInterface - Necessita de um input e output (de onde vem e vai a informação)
 process - De dentro do proprio processo (terminal)
 stdin/out (stanterd input/out entrada padrão (console))
 */ 
 

const readLine = require('readline').createInterface(
    {
        
        input:process.stdin,
        output:process.stdout
    }
)

const minhaPrimeiraConstanteString = 'Minha Primeira Constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
 
readLine.question('Informe sua idade:',input =>{
   let leituraDeCampo = input
    console.log(`O usuário digitou: ${leituraDeCampo}`);
} );


