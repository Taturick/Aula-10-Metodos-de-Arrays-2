const arquivos = [
    "foto.jpeg", "excel.exe", "texte.doc" , "crack.bat"
]
const extensao = ".bat"

const antivirus = (arrayarquivos)=>{
    const resultado = arrayarquivos.some((arquivo)=>{
        const existeExtensao = arquivo.indexOf(".bat");
        return existeExtensao !== -1;
    });
    if(resultado){
        console.log("Vírus detectado")
    } else{
        console.log("Nenhum vírus encontrado");
    }
}
antivirus(arquivos)