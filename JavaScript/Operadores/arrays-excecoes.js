/*
Escrever um programa que recebe alguns produtos como argumento
Validar se estão na lista de disponiveis do mercado
Se estiver avisar o usuario quais estão e quais não
Exibir a lista disponivel ordenado por ordem alfabetica
*/
 
try{
const listaDeProdutosDisponiveis = [
    'Pao',
    'Leite',
    'Cafe',
    'Laranja',
    'Macarrão',
    'Sabonete',
    'Detergente'
];

const listaDeArgumentos = process.argv.slice(2);


const listaDeProdutosSolicitadosDisponiveis  = listaDeProdutosDisponiveis.filter(produto => {
    return listaDeArgumentos.find(argumento => argumento === produto);
});

/*Percorre a função*/
listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));

const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento =>{
    /*Negação*/
    return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
});
}
catch(e){
    console.log('Não foi possivel carregar a lista de produtos');
}


listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nós não temos ${argumento}`));

listaDeProdutosDisponiveis.sort();
listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto esta disponveil ${produto}`)); 