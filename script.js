function solicitarNumero() {
    let numero;
    while (true) {
        let input = prompt("Por favor, ingrese un número:");
        numero = parseInt(input);
        if (!isNaN(numero) && numero > 0) {
            break;
        } else {
            alert("Entrada inválida. Por favor ingrese un número entero positivo.");
        }
    }
    return numero;
}

function generarFibonacci(n) {
    let fibonacci = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonacci.push(0);
        } else if (i === 1) {
            fibonacci.push(1);
        } else {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }
    return fibonacci;
}

function mostrarFibonacci() {
    const numero = solicitarNumero();
    const serieFibonacci = generarFibonacci(numero);
    console.log("Serie de Fibonacci:", serieFibonacci.join(", "));
    document.getElementById("resultado").textContent = `Ingresaste: ${numero}, tu serie de Fibonacci de ${numero} números es: ${serieFibonacci.join(", ")}`;
}

document.addEventListener("DOMContentLoaded", (event) => {
    mostrarFibonacci();
});
