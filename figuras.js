//Codigo del cuadrado
console.group("Cuadrado");


function perimetroCuadrado(lado)
{
    return lado * 4;

}



function areaCuadrado(lado)
{
    return lado * lado;
}

console.groupEnd();


//Codigo del triangulo
console.group("Triangulo");


function perimetroTriangulo( lado1, lado2, base)
{
    return lado1 + lado2 + base;
} 


function areaTriangulo(base, altura)
{
    return (base * altura) / 2;
}

console.groupEnd();




//Codigo del circulo
console.group("Circulo");
 

//Diametro
function diametroCirculo(radio)
{
     return radio * 2
}

//PI
const PI = Math.PI;
console.log("PI es : " + PI);


// Perimetro
function permietroCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * PI;
    //El diametro es el radio multiplicado por 2
}


//Area
function areaCirculo(radio)
{
    return (radio * radio) * PI;
    //El area es el radio al cuadrado por PI
}

console.groupEnd();


 //Aqui van las funciones del html
 //Funciones cuadrado
 function calcularPerimetroCuadrado()
 {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
 }

 function calcularAreaCuadrado()
 {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
 }

 //Funciones triangulo
 function calcularPerimetroTriangulo()
 {
    const input1 = document.getElementById("inputLado_1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputLado_2");
    const value2 = Number(input2.value);

    const base = document.getElementById("inputLado_3");
    const value3 = Number(base.value);


    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perimetro del triangulo es: " + perimetro);
 }

 function calcularAreaTriangulo()
 {
    const input1 = document.getElementById("inputLado_1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputLado_2");
    const value2 = Number(input2.value);

    const base = document.getElementById("inputLado_3");
    const value3 = Number(base.value);

    const area = areaTriangulo(value1, value2, value3);
    alert("El area del triangulo es: " + area);

 }

 //Funciones circulo
function calcularPerimetroCirculo()
{
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = permietroCirculo(value);
    alert("El perimetro del triangulo es: " + perimetro);

}

function calcularAreaCirculo()
{
    const input  = document.getElementById("inputCirculo");
    const value = input.value;

    const area  = areaCirculo(value);
    alert("El area del circulo es: " + area);
}



