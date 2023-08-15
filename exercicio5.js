const produtos = [
    {nome: "arroz", preco:2100},
    {nome: "feijão", preco:1500},
    {nome: "leite", preco:479},
    {nome: "bolacha", preco:279},
]

const novoArray = produtos.map((produto)=>{
    return {
        descontos: `Produto: ${produto.nome},Preço: ${produto.preco}, Preço com 10% de desconto:${produto.preco -produto.preco*0.1}`
    }
})

console.log(novoArray)