function realizarOperacion() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("No se puede dividir entre cero");
                return;
            }
                break;
        default:
            alert("Operación no válida");
            return;
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
function limpiarFormulario() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operacion").value = "";
    document.getElementById("resultado").innerText = "";
}
function salirCalculadora() {
    document.getElementById("resultado").innerText = "¡Gracias por usar la calculadora! Hasta pronto.";
}    