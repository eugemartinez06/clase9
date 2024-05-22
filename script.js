let name = "Emilia";
let surname = "Roca";
console.log(surname + " " + name);

let numberone =120;
let numbertwo =20;
let resultsuma = numberone + numbertwo;
let resultresta = numberone - numbertwo;
let resultmulti = numberone * numbertwo;
let resultdivision = numberone / numbertwo;
console.log ("Suma:", resultsuma);
console.log ("Resta:", resultresta);
console.log ("Multiplicación:", resultmulti);
console.log ("División:", resultdivision);

let nota = 3;
if (nota < 4){
    console.log("Aplazado");
    } else if (nota < 7) {
        console.log("Desaprobado");
    } else if (nota < 9) {
        console.log("Aprobado");
        } else 
            console.log("Sobresaliente");

let nombre =["Diego", "Juan", "Anabel", "Esteban"];
console.log(nombre);
console.log(nombre[0]);
console.log(nombre[2]);
console.log(nombre[3]);
console.log("Cantidad de nombre:",nombre.length);
for(let i=0;i< nombre.length; i++){
    console.log(nombre[i])
    }

    let topping ="Oreo";
    let precio = 0;
    let preciofinal = 0;
    let helado = 200;

    if(topping == "Oreo"){
        precio = 10;
    } else if(topping == "KitKat"){
        precio =15;
       }else if(toppping == "Kinder") {
       }else  {
        console.log("No tenemose este topping");
}
preciofinal = helado + precio;
console.log("El helado cuesta $" + preciofinal);

let bebida = "Comida"
switch (bebida) {
    case "Carne":
    console.log("Vino Tinto");
    break;
    case "Pescado":
    console.log("Vino Blanco");
    break;
    case "Verdura":
    console.log("Agua");
    break;
    default:
        console.log("Elija carne, pescado o verdura");
        }


let Banda =["Queen", "Aerosmith", "The Doors"];
Banda.push("Arctic Monkeys");
    for(let i=0;i< Banda.length; i++){
    console.log(Banda[i]);
    }

    let number = 1;
    let suma = 0;
    while(number <= 10);{
        suma += number;
        number++;}
        console.log("La suma de los números del 1 al 10 es: " + suma);

var resultado;
var numero1 = 3;
var numero2 = 5;
function suma_y_muestra() {
    resultado = numero1 + numero2;
    alert("El resultado es: " + resultado)}
    suma_y_muestra(); 