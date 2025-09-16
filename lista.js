import { guardarProducto, obtenerProductos } from "./localSotareCarrito";

const inputProducto = document.getElementById('producto');
const btnCarrito = document.getElementById('btnCarrito');
const lista = document.getElementById('Lista');

function mostrarProductos() {
    const productos = obtenerProductos();
    lista.innerHTML = '';
    for (let i = 0; i < productos.length; i++) {
        const li = document.createElement('li');
        li.textContent = productos[i];
        lista.appendChild(li);

    }
}
btnCarrito.addEventListener('click', function() {
    const producto = inputProducto.value;
    if (producto !== '') {
        guardarProducto(producto);
        inputProducto.value = '';
        mostrarProductos();
    }
});

mostrarProductos();