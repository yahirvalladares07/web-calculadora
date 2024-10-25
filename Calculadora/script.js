function limpiarPantalla() {
    document.getElementById("resultado").value = "";
}

function borrarUltimo() {
    let actual = document.getElementById("resultado").value;
    document.getElementById("resultado").value = actual.slice(0, -1);
}

function agregar(valor) {
    document.getElementById("resultado").value += valor;
}

function calcular() {
    try {
        let resultado = eval(document.getElementById("resultado").value);
        document.getElementById("resultado").value = resultado;
    } catch (error) {
        document.getElementById("resultado").value = "Error";
    }
}
