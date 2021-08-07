// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return Number.parseFloat(lado1) + Number.parseFloat(lado2) + Number.parseFloat(base);
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML (CUADRADO)
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetroC = perimetroCuadrado(value);
    alert(perimetroC);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const areaC = areaCuadrado(value);
    alert(areaC);
}

// Aquí interactuamos con el HTML (TRIANGULO)
function calcularPerimetroTriangulo() {
    const lado_a = document.getElementById("ladoA");
    const value_a = lado_a.value;

    const lado_b = document.getElementById("ladoB");
    const value_b = lado_b.value;

    const baseT = document.getElementById("baseT");
    const value_baseT = baseT.value;

    const perimetroT = perimetroTriangulo(value_a , value_b, value_baseT);

    alert(perimetroT);
}
function calcularAreaTriangulo() {
    const baseT = document.getElementById("baseT");
    const value_baseT = baseT.value;

    const altura = document.getElementById("altura");
    const value_altura = altura.value;

    const areaT = areaTriangulo(value_baseT, value_altura);
    alert(areaT);
}

// Aquí interactuamos con el HTML (CIRCULO)
function calcularPerimetroCirculo() {
    const radio = document.getElementById("radio");
    const value_radio = radio.value;

    const perimetroCIr = perimetroCirculo(value_radio);

    alert(perimetroCIr);
}
function calcularAreaCirculo() {
    const radio = document.getElementById("radio");
    const value_radio = radio.value;

    const areaCir = areaCirculo(value_radio);
    alert(areaCir);
}