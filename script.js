function Verificar(){
    var numero1 = parseFloat(document.getElementById("entrada1").value)
    var numero2 = parseFloat(document.getElementById("entrada2").value)
    
    var resultado = numero1 + numero2
    
    document.getElementById("resultadoValor").innerHTML = resultado
} 

