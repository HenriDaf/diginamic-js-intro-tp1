



function acci(n){ 
    var w;

    var u = 0;
    var v = 1;
    
    console.log("numéro 1 : " + u)
    console.log("numéro 2 : " + v)
    for(var i=2; i < n; i++) {
        w = u+v;
        u = v;
        v = w;
        
       console.log("numero " + (i+1) + " : " + w)   
    }


  
}


acci(9);
