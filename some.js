//  Some testa se ao menos um elemento do array passa no teste e retorna true

const nomes = [
    "João", "Maria", "Leon"
];
const numeros = [1,3,5,9,1,55,31]

const resultado = nomes.some((elemento) => {
    return elemento === "Leo";

});

const check = numeros.some((numero) => {
    return numero % 2 === 0;
});


console.log(check)