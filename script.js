function Verificar(){
    var numero1 = parseFloat(document.getElementById("entrada1").value)
    var numero2 = parseFloat(document.getElementById("entrada2").value)
    var operador = document.getElementById("operador").value

    var resultado

    if (numero1 < 0 || numero2 < 0) {
        window.alert("Insira números válidos")
    }
   switch (operador) {
        case "+":
        resultado = numero1 + numero2
        break

        case "-":
        resultado = numero1 - numero2
        break

        case "x": 
        case "*":
        resultado = numero1 * numero2
        break

        case "/":
        resultado = numero1 / numero2
        break

        default:
        window.alert("Operador não reconhecido!!!")
        return
    }
 
    document.getElementById("resultadoValor").innerHTML = resultado
} 

