const carros = [
{nome: "Hb20", marca: "Hyundai", ano: 2023, cor: "prata"}, 
{nome: "Fusca", marca: "Volkswagem", ano: 1971, cor: "vermelho"}, 
{nome: "Gol", marca: "Volkswagem", ano: 2007, cor: "prata"},
{nome: "Saveiro", marca: "Volkswagem", ano: 2008, cor: "branco"}, 
{nome: "Argo", marca: "Fiat", ano: 2022, cor: "preto"} 
]

// console.log(
//     carros.find((carro)=>{
//         return carro.marca === "Fiat"
//     })
// )

const buscarcarros= (marca, arraycarros) => {
    return arraycarros.find((carro) => {
        return carro.marca === marca
    })
}
console.log(buscarcarros("Volkswagem", carros))