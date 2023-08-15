const numeros = [1,2,3,4,5,6,7,8,9,10]

console.log(numeros.map((numero)=>{
    return numero /2;
}))


const usuarios = [
    { nome: "Ricardo", sobrenome: "França", idade: 39},
    { nome: "Reila", sobrenome: "França", idade: 39},
    { nome: "Paulo", sobrenome: "Silva", idade: 39},
    { nome: "José", sobrenome: "Oliveira", idade: 39}
]

const novoArray = usuarios.map((fullName)=>{
    return {nomeCompleto: `${fullName.nome} ${fullName.sobrenome}`,Idade: fullName.idade}
});
console.log(novoArray);
console.log(usuarios);