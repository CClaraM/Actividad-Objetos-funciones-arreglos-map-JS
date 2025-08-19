const prompt = require("prompt-sync")();
let cuentas = [];
let consecutivo = 1;

function crearCuenta() {
    let fecha = new Date();
    let codigo = `${fecha.getFullYear()}-${consecutivo++}`;
    cuentas.push({ codigo, fecha: fecha.toLocaleDateString(), saldo: 0 });
    console.log("Cuenta creada:", codigo);
}

function consignar(codigo, monto) {
    let cuenta = cuentas.find(c => c.codigo === codigo);
    if (cuenta) cuenta.saldo += monto;
}

function retirar(codigo, monto) {
    let cuenta = cuentas.find(c => c.codigo === codigo);
    if (cuenta && cuenta.saldo >= monto) cuenta.saldo -= monto;
}

function consultar(codigo) {
    console.log(cuentas.find(c => c.codigo === codigo));
}

function listar() {
    console.log(cuentas);
}

function menuBanco() {
    let opcion;
    do {
        console.log("MENÚ BANCO ADSO\n1. Crear Cuenta\n2. Consignar Cuenta\n3. Retirar Cuenta\n4. Consultar Cuenta Por Código\n6. Listar Cuentas\n7. Salir");
        opcion = prompt("Ingrese opción: ");
        if (opcion === "1") crearCuenta();
        else if (opcion === "2") {
            let codigo = prompt("Código: ");
            let monto = parseInt(prompt("Monto: "));
            consignar(codigo, monto);
        }
        else if (opcion === "3") {
            let codigo = prompt("Código: ");
            let monto = parseInt(prompt("Monto: "));
            retirar(codigo, monto);
        }
        else if (opcion === "4") {
            let codigo = prompt("Código: ");
            consultar(codigo);
        }
        else if (opcion === "6") listar();
    } while(opcion !== "7");
}

menuBanco();