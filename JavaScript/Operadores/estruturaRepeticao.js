/* 
Process.argv pega os parametros digitados no terminal
e coloca em um Array
O .slice pega a partir da segunda posição (porque as duas primeiras são do proprio node)

console.log(process.argv.slice(2));
*/


const listaArgumentos = process.argv.slice(2);

console.log('  ---------- Executando um FOR -------------         ');

for(let controladorFor =0; controladorFor < listaArgumentos.length; controladorFor ++ )
{
   /*Percorre a lista na posição dinamica e exibe o item dessa posição*/
    console.log(`Posição ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
}
console.log('  ---------- Executando um While -------------         ');

let controladorWhile = 0 ;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posição ${controladorWhile} valor lido =${listaArgumentos[controladorWhile]} `);
    controladorWhile++;
}