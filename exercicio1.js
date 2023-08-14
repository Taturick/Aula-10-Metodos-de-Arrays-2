const usuarios = [
    {nome: "Ricardo", idade: 39},
    {nome: "Edson", idade: 42},
    {nome: "Francis", idade: 41},
    {nome: "Reila", idade: 15}
];

const checkFest = (arrayObjetos)=>{
    const resultado = arrayObjetos.every((objeto)=>{
        return objeto.idade > 17
    });
    if (resultado){
        console.log("Festa liberada");
    } else{
        console.log("Possui menor de idade");
    }
}
checkFest(usuarios)