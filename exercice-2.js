

var num = prompt('Choisir un chiffre!', 0);

function acci(n){ 
    var w;

    var u = 0;
    var v = 1;
    
    document.write("numéro 1 : " + u + "<br>");
    document.write("numéro 2 : " + v + "<br>");
    for(var i=2; i < n; i++) {
        w = u+v;
        u = v;
        v = w;
        
       document.write("numero " + (i+1) + " : " + w + "<br>")   
    }


  
}


acci(num);