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
    console.log(arrStore);
}

function crearStringItemStore(array) {
    let info = "";
    array.array.forEach((element) => {
        info += "ID: " + element.id + "\nNombre: " + element.desc + "\nCategoría: " + element.categ + "\nPrecio: " + element.precioUnit + "\n-------\n\n";
    });
    return info;
}

llenarStore();
let inputPass = prompt("PHOTO STORE\n\nIngrese su contraseña para acceder al store:");
let opcionSel;
if (userLogin(inputPass)) {
    do {
        let salir = false;
        opcionSel = prompt("PHOTO STORE\n" + "\n" + "Ingrese el número de la opción deseada:\n" + "1 - Ver carrito (checkout)\n2 - Explorar store\nX - Salir");
        opcionSel = opcionSel.toUpperCase();
        switch (opcionSel) {
            case "X":
                // El usuario quiere salir
                salir = true;
                break;
            case 1:
                // Ver el carrito
                break;
            case 2:
                // Ver store
                stringStore = crearStringItemStore(arrStore);
                input = prompt("Ingrese el id del producto que desee agregar al carrito:\n\n" + stringStore);

                break;
            default:
                break;
        }
    } while (opcionSel != 1 && opcionSel != 2 && opcionSel != "X");
    if (salir) {
        alert("Nos vemos!");
    }
} else {
    alert("Ingreso fallido. Intente nuevamente mas tarde.");
}
