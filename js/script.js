/*  ENTREGA #2 - JAVASCRIPT - COMISION #41810

    SIMULAMOS UN STORE DE FOTOGRAFÍAS DE STOCK ESTILO SHUTTERSTOCK / ADOBE 
    Y DE PRESETS PARA EDITORES DE FOTOGRAFÍA Y VIDEO, YA QUE MI PROYECTO DE DW
    SE TRATA DE UNA WEB DE SERVICIOS DE FOTOGRAFÍA, VIDEO Y COBERTURA DE EVENTOS  */

/*  1) ACCESO CON CONTRASEÑA ÚNICAMENTE, CON 3 INTENTOS PERMITIDOS POR SEGURIDAD
    2) SE MUESTRA EL CONTENIDO DEL STORE
    3) SE EJECUTA UN WHILE MIENTRAS EL USUARIO DESEE SUMAR ITEMS AL CARRITO (CART)
    4) CUANDO EL USUARIO DESEE PASAR A LA COMPRA, SALIMOS DEL WHILE Y MOSTRAMOS EL CART */

const cart = [];
const arrStore = [];
class Item {
    //Item en stock
    constructor(id, categ, desc, precioUnit) {
        this.id = id; //ID interno
        this.categ = categ; //categoría de producto (foto, preset, etc)
        this.desc = desc; //descripción del item
        this.precioUnit = precioUnit;
    }
}

function userLogin(pass) {
    const savedPass = "coder";
    if (pass == savedPass) {
        return true;
    } else {
        return false;
    }
}

function llenarStore() {
    arrStore.push((item1 = new Item(100, "photo", "Monte Fitz Roy UHD 4000x2900", 500)));
    arrStore.push((item2 = new Item(101, "photo", "Niños corriendo en la playa SHD 1980x1600", 600)));
    arrStore.push((item3 = new Item(200, "preset", "LUT1", 260)));
    arrStore.push((item4 = new Item(201, "preset", "LUT2", 260)));
    arrStore.push((item5 = new Item(102, "photo", "Coworking 1", 375)));
}

function crearStringItem(array) {
    // Con esta funcion creamos el string para mostrar el store en un alert/prompt
    let info = "";
    array.forEach((element) => {
        info += "ID: " + element.id + "\nNombre: " + element.desc + "\nCategoría: " + element.categ + "\nPrecio: " + element.precioUnit + "\n-------\n\n";
    });
    return info;
}

//Simulamos un login de usuario registrado únicamente pidiendo su password
let loginOk = false;
let inputPass = prompt("PHOTO STORE\n\nIngrese su contraseña para acceder al store:");
console.log(">> pass ingresado: " + inputPass);
for (let i = 2; i > 0; i--) {
    if (userLogin(inputPass)) {
        loginOk = true;
        break;
    } else {
        inputPass = prompt("La contraseña no es válida. Ingrese su contraseña:");
    }
}
if (loginOk) {
    // ENTRANDO AL STORE
    // Llenamos el store con productos hardcodeados para simular ingresos al carrito de compra
    llenarStore();
    alert("BIENVENIDO/A A PHOTOSTORE!\n\nA continuación, siga las instrucciones en pantalla para efectuar su compra.");
    let stringStore = crearStringItem(arrStore);
    let input;
    do {
        input = prompt("Ingrese el id del producto que desee agregar al carrito o ingrese X para continuar con la compra:\n\n" + stringStore);
        input = input.toUpperCase();
        if (!isNaN(input)) {
            // Primero chequeamos que el item seleccionado exista en el array de store
            let itemBuscado = arrStore.find((element) => element.id == parseInt(input));
            if (itemBuscado == undefined) {
                alert("El id ingresado no se encuentra en el store.");
            } else {
                // Pusheamos/agreamos el item al final del array cart
                cart.push(itemBuscado);
                alert("Producto: [" + "(" + itemBuscado.id + ") " + itemBuscado.desc + "] agregado al carrito");
            }
        } else {
            if (input != "X") {
                alert("Ingresó un dato inválido. Por favor, ingrese el ID del producto deseado o X para continuar con la compra.");
            }
        }
    } while (input != "X");
    // Cuando el usuario decide continuar para comprar:
    stringStore = crearStringItem(cart);
    let importeTotal = 0;
    for (const item of cart) {
        importeTotal += parseFloat(item.precioUnit);
    }
    alert("ITEMS EN EL CARRITO:\n\n" + stringStore + "\nSUBTOTAL: $ " + importeTotal);
    input = "";
    do {
        input = prompt("¿Cómo desea abonar?\n\n1- Tarjeta de débito (0% recargo)\n2- Tarjeta de crédito (10% recargo)\nX- Cancelar compra y vaciar carrito");
    } while (input != 1 && input != 2 && input != "X" && input != "x");

    switch (input) {
        case "1":
            alert("Pago efectuado con tarjeta de débito\nTOTAL: $ " + importeTotal);
            break;
        case "2":
            alert("Pago efectuado con tarjeta de crédito\nTOTAL: $ " + (importeTotal * 1.1).toFixed(2));
            break;
        case "X":
        case "x":
            alert("Compra cancelada");
            break;
    }
	// Fin del script por compra efectuada
} else {
    // Fin del script por contraseña erronea 3 veces
    alert("Ha ingresado una contraseña no válida 3 veces. Intente nuevamente mas tarde.");
}
