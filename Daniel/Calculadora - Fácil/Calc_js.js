function calculadora() {    
    var n1 = parseFloat(document.getElementById('n1').value);    
    var n2 = parseFloat(document.getElementById('n2').value);    
    var resultado = 0;  
    if (document.getElementsByName('operacao')[0].checked) {    
        resultado = n1 + n2;  
    }       
    document.getElementById('resultado').value = resultado;    
 }    