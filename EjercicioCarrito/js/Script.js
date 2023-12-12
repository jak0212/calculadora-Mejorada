// Script.js

// Variables para el primer libro (Harry Potter)
let cantidadLibroHarryPotter = 0; // Inicializa la cantidad de libros de Harry Potter en 0.
const precioLibroHarryPotter = 65900; // Establece el precio unitario del libro de Harry Potter.

// Variables para el segundo libro (El señor de los anillos)
let cantidadLibroElSenorAnillos = 0; // Inicializa la cantidad de libros de El señor de los anillos en 0.
const precioLibroElSenorAnillos = 59900; // Establece el precio unitario del libro de El señor de los anillos.

// Funciones de incremento y decremento para el primer libro
function incremento() {
    cantidadLibroHarryPotter++; // Incrementa la cantidad de libros de Harry Potter.
    actualizarValores(); // Llama a la función para actualizar los valores en la interfaz.
}

function decremento() {
    if (cantidadLibroHarryPotter > 0) { // Verifica que haya al menos un libro de Harry Potter antes de decrementar.
        cantidadLibroHarryPotter--; // Decrementa la cantidad de libros de Harry Potter.
        actualizarValores(); // Llama a la función para actualizar los valores en la interfaz.
    }
}

function resetear() {
    cantidadLibroHarryPotter = 0; // Resetea la cantidad de libros de Harry Potter a 0.
    actualizarValores(); // Llama a la función para actualizar los valores en la interfaz.
}

// Funciones de incremento y decremento para el segundo libro
function incremento2() {
    cantidadLibroElSenorAnillos++; // Incrementa la cantidad de libros de El señor de los anillos.
    actualizarValores(); // Llama a la función para actualizar los valores en la interfaz.
}

function decremento2() {
    if (cantidadLibroElSenorAnillos > 0) { // Verifica que haya al menos un libro de El señor de los anillos antes de decrementar.
        cantidadLibroElSenorAnillos--; // Decrementa la cantidad de libros de El señor de los anillos.
        actualizarValores(); // Llama a la función para actualizar los valores en la interfaz.
    }
}

function resetear2() {
    cantidadLibroElSenorAnillos = 0; // Resetea la cantidad de libros de El señor de los anillos a 0.
    actualizarValores(); // Llama a la función para actualizar los valores en la interfaz.
}

// Función para actualizar los valores en la interfaz
function actualizarValores() {
    document.getElementById('valor').innerText = cantidadLibroHarryPotter; // Actualiza la cantidad de libros de Harry Potter en la interfaz.
    document.getElementById('valor2').innerText = cantidadLibroElSenorAnillos; // Actualiza la cantidad de libros de El señor de los anillos en la interfaz.

    const totalLibroHarryPotter = cantidadLibroHarryPotter * precioLibroHarryPotter; // Calcula el total para los libros de Harry Potter.
    document.getElementById('valorLibroHarryPotter').innerText = totalLibroHarryPotter; // Actualiza el total para los libros de Harry Potter en la interfaz.

    const totalLibroElSenorAnillos = cantidadLibroElSenorAnillos * precioLibroElSenorAnillos; // Calcula el total para los libros de El señor de los anillos.
    document.getElementById('valorLibroElSeñorAnillos').innerText = totalLibroElSenorAnillos; // Actualiza el total para los libros de El señor de los anillos en la interfaz.
}

// Función para calcular el total de la compra
function total() {
    const totalCompra = (cantidadLibroHarryPotter * precioLibroHarryPotter) + (cantidadLibroElSenorAnillos * precioLibroElSenorAnillos); // Calcula el total de la compra sumando los totales de ambos libros.
    document.getElementById('total').innerText = `Total: $${totalCompra}`; // Actualiza el elemento en la interfaz que muestra el total de la compra.
}
