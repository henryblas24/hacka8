// Pregunta  1
function suma(a, b){ //parametros
    return a + b;
}

 // argumentos
console.log(suma(4, 6))

// Pregunta  2

function promedio(c, d, f, g) { //parametros
    return (c + d + f + g)/4;
}
// muestra resultado 
console.log(promedio(15, 16, 17, 18))

// Pregunta  3

function arearectangulo(c, d) { //parametros
    return c * d;
}
// muestra resultado
console.log(arearectangulo(20, 15))

// Pregunta  4

function areatriangulo(c, d) { //parametros
    return (c * d)/2;
}
// muestra resultado
console.log(areatriangulo(30, 20))

// Pregunta  5

function area_circunferencia(d) { //parametros
    return (Math.PI * d*d);
}
// muestra resultado
console.log(area_circunferencia(20))

// Pregunta  6

function sueldo_semanal(horas, pago_hora) { //parametros
    return ( (horas*pago_hora)*7);
}
// argumentos
horas = 8;
pago_hora = 10;
// muestra resultado
console.log(sueldo_semanal(horas, pago_hora))


// Pregunta  7

function pedido_tela(pulgadas, m_tela) { //parametros
    return ( (pulgadas*m_tela));
}
// argumentos  
pulgadas = 0.0254;
m_tela = 4000;

// muestra resultado
console.log(sueldo_semanal(pulgadas, m_tela))


// Pregunta 8

function compra_dolares(dolar, cant_soles) { //parametros
    return  (cant_soles/dolar);
}
// argumentos  
dolar = 3.70;
cant_soles = 4000;

// muestra resultado
console.log(compra_dolares(dolar, cant_soles))


// Pregunta 9

function edad_trabajador(ano_nacimiento) { //parametros
    return 'la edad del trabajador es' + ' '+ (2023-ano_nacimiento);
}
// argumentos  
ano_nacimiento = 2000;

// muestra resultado edad
console.log(edad_trabajador(ano_nacimiento))


// Pregunta 10

function persona_menor(edad1, edad2, edad3) { //parametros
    if (edad1<edad2 && edad1<edad3) {
        return 'la persona menor tiene' + ' '+ edad1};
    if (edad2<edad1 && edad2<edad3) {
        return 'la persona menor tiene' + ' '+ edad2};
    if (edad3<edad1 && edad3<edad2) {
        return 'la persona menor tiene' + ' '+ edad3};
    }
// argumentos  

edad1 = 30;
edad2 = 20;
edad3 = 50;

// muestra resultado edad
console.log(persona_menor(edad1, edad2, edad3))



// Pregunta 11

let a = 0;
function bono_antiguedad( ) { //parametros
    if (a=1) {
        return 'su bono es '+ 100};
    else if (a=2) {
        return 'su bono es '+ 200};
    else if (a=3) {
        return 'su bono es '+ 300};
    else if (a=4) {
        return 'su bono es '+ 400};
    else if (e=5) {
        return 'su bono es '+ 500};
    else if (a>5) {
        return 'su bono es '+ 1000};
    }  

// muestra resultado del bono
console.log(bono_antiguedad())

// Pregunta 12

function salario(bono1, bono2, bono3, bono4, bonomas5) { //parametros
    if (a=1) {
        return 'su bono es '+ bono1};
    if (b=2) {
        return 'su bono es '+ bono2};
    if (c=3) {
        return 'su bono es '+ bono3};
    if (d=4) {
        return 'su bono es '+ bono4};
    if (e=5) {
        return 'su bono es '+ bono5};
    if (f>5) {
        return 'su bono es '+ bono_mas5};
    }
// argumentos  
salario = 1500;
salario_anual = salario + (salario*10)/100

// muestra resultado del bono
console.log(bono_antiguedad(bono1, bono2, bono3, bono4, bono5, bono_mas5))
















