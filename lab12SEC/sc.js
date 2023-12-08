function CountModC() { 
        var a = +document.getElementById('A').value, 
        b = +document.getElementById('B').value, 
        c = +document.getElementById('C').value, 
        operator = document.getElementById('NumFun').value, result; 
        
        switch (operator) { 
            case '+': result = a + b; 
            break; 
            
            case '-': result = Math.abs(a - b); 
            break; 
            
            default: result = Math.pow(a, b); } 
            document.writeln(result % c); 

            
}