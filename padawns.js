let padawans=(edad,tarea)=>{

    if(edad < 15){
        let mensaje= `Su edad es de ${edad} años y puedes continuar con el manejo de la fuerza` ;
        tarea(mensaje,null);
    }else{
        let mensaje = `Su edad es de ${edad} años y puedes continuar con el manejo del sable de luz` ;
        tarea(null,mensaje);         
    }
}
padawans(23, (error,mensaje)=>{
if(error){
    console.log(error);
}
else{
    console.log(mensaje);
    console.log("Estas listo para el desafio padawan")
}


});