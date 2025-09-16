const CARRITO = 'carrito';

function guardarProducto(producto) {
    let productos = JSON.parse(localStorage.getItem(CARRITO)) || [];
    productos.push(producto);
    localStorage.setItem(CARRITO, JSON.stringify(productos));
}

function obtenerProductos() {
    return JSON.parse(localStorage.getItem(CARRITO)) || [];
}

export {CARRITO, guardarProducto, obtenerProductos};