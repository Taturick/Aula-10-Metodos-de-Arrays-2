// const interval = setInterval(()=>{
//     console.log("Rick")
// }, 2000)

// console.log(interval)

// const imprimir = ()=>{
//       console.log("OPa e ai?")
//     clearInterval(interval)
// }

// const interval = setInterval(imprimir, 2000)
let numero = 10;
const contador = setInterval(()=>{
console.log(numero);
numero --;
if(numero===0){
    console.log("A bomba explodiu!!!")
    clearInterval(contador)
}
},1000)