function resolver1() {
    var resultado;var a,b,c,d;
    var a= parseFloat(document.getElementById("num1").value);/*toma valor introducido en html y lo guarda en variable*/
    var b= parseFloat(document.getElementById("num2").value);
    var c= parseFloat(document.getElementById("num3").value);
    var d= parseFloat(document.getElementById("num4").value);
    if(isNaN(a)) a=0;/*controla que el valor no sea Nan y si lo es lo cambia por 0*/
    if(isNaN(b)) b=0;
    if(isNaN(c)) c=0;
    if(isNaN(d)) d=0;
    if(c===0&&a===0){document.write("No existe x ")}/*condiciones para distintos tipos de resultados en la ecuacion*/
    else if(a===c){document.write("No existe x ")}
    else if(a===1&&c===0&&d===0){resultado=(-1*b);document.write("x es ="+ resultado)}
    else if(a===0&&b===0&&c===1){resultado=(-1*d);document.write("x es ="+ resultado)}
    else if(a===0&&b===0&&c!==1){resultado=((-1*d)/c);document.write("x es ="+ resultado)}
    else if(d===0&&c===0&&a!==1){resultado=((-1*b)/a);document.write("x es ="+ resultado)}
    else if(c!==0&&a!==0){resultado=(((-1*b)+d)/(a+(-1*c)));document.write("x es ="+ resultado)}
    else {resultado=(((-1*b)+d)/(a+(-1*c)));document.write("x es ="+ resultado)}

}