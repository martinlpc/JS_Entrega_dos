const cart = [];
const arrStore = [];
class itemStore {
    //Item en stock
    constructor(id, categ, desc, precioUnit) {
        this.id = id; //ID interno
        this.categ = categ; //categoría de producto (foto, preset, etc)
        this.desc = desc; //descripción del item
        this.precioUnit = precioUnit;
    }
}
class itemCart {
    //Item en carrito
    constructor(id, desc, precio) {
        this.id = id;
        this.desc = desc;
        this.precio = precio;
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
    arrStore.push((item1 = new itemStore(100, "photo", "Monte Fitz Roy UHD 4000x2900", 500)));
    arrStore.push((item2 = new itemStore(101, "photo", "Niños corriendo en la playa SHD 1980x1600", 600)));
    arrStore.push((item3 = new itemStore(200, "preset", "LUT1", 260)));
    arrStore.push((item4 = new itemStore(201, "preset", "LUT2", 260)));
    arrStore.push((item5 = new itemStore(102, "photo", "Coworking 1", 375)));
    console.log(arrStore);
}

llenarStore();
let inputPass = prompt("PHOTO STORE\n\nIngrese su contraseña para acceder al store:");
if (userLogin(inputPass)) {
    let opcionSel;
    do {
        let salir = false;
        opcionSel = prompt("PHOTO STORE\n" + "\n" + "Ingrese el número de la opción deseada:\n" + "1 - Ver carrito (checkout)\n2 - Explorar store\nX - Salir");
        opcionSel = opcionSel.toUpperCase();
        switch (userInput) {
            case 1:
                break;
            case 2:
                break;
            case "X":
                salir = true;
                break;
            default:
                break;
        }
    } while (opcionSel != 1 && opcionSel != 2 && opcionSel != "X");
    if (userInput == "X") {
        alert("Nos vemos!");
    }
} else {
    alert("Ingreso fallido. Intente nuevamente mas tarde.");
}
