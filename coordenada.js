console.log(calcularDistancia(70,-50));

function calcularDistancia(coordenadaX, coordenadaY){

    let cuadradox = Math.pow(coordenadaX,2);
    let cuadradoy = Math.pow(coordenadaY,2);

    let sumaCuadrados = cuadradox + cuadradoy;

    let raizCuadrada = Math.sqrt(sumaCuadrados);

    return(raizCuadrada);
}