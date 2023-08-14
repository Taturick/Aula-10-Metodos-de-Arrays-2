const num = [1,2,5,3,7,9]

console.log(num.find((number)=>{
    return number >6
}))
const pessoas =
[{nome: "Ricardo", idade: 39},
{nome: "Edson", idade: 42},
{nome: "Francis", idade: 41},
{nome: "Reila", idade: 15}]

console.log(
    pessoas.find((usuario)=>{
        return usuario.idade >41
    })
)
const nomes = ["Rick", "Tatu", "Ricardo"]

console.log(
    nomes.find((nome)=>{
return nome = "Tatu"
    })
)