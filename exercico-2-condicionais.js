const valorDaCompra = 100;
const numeroDeParcelas = 8;

if (numeroDeParcelas === 1) {
    // a vista 10% de desconto
    const desconto = valorDaCompra * 10/100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Você tem que pagar ${valorAPagar}, pois à vista tem 10% de desconto.`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    // parcelado sem juros
    const valorDaParcela =  (valorDaCompra / numeroDeParcelas).toFixed(2)
    console.log(`Você deve pagar em ${numeroDeParcelas}x sem juros de R$${valorDaParcela}.`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    // parcelado com juros
    const valorAPagarComJuros = (valorDaCompra * (1 + 1/100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x de R$${valorDaParcela} totalizando ${valorAPagarComJuros}, devido ao total de juros.`);
} else {
    // número invaldo
    console.log("Número de parcelas invalidos");
}