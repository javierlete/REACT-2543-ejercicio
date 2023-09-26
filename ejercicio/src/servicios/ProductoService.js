import { URL_BASE } from '../constantes/globales';

const URL_PRODUCTOS = URL_BASE + 'productos/';

export default class ProductoService {
    static async getProductos() {
        const respuesta = await fetch(URL_PRODUCTOS);
        const productos = await respuesta.json();
        return productos;
    }

    static async getProducto(id) {
        const respuesta = await fetch(URL_PRODUCTOS + id);
        const producto = await respuesta.json();
        return producto;
    }

    static async postProducto(producto) {
        const respuesta = await fetch(URL_PRODUCTOS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });
        const nuevoProducto = await respuesta.json();
        return nuevoProducto;
    }

    static async putProducto(producto) {
        const respuesta = await fetch(URL_PRODUCTOS + producto.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });
        const nuevoProducto = await respuesta.json();
        return nuevoProducto;
    }

    static async patchProducto(producto) {
        const respuesta = await fetch(URL_PRODUCTOS + producto.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });
        const nuevoProducto = await respuesta.json();
        return nuevoProducto;
    }

    static async deleteProducto(id) {
        return await fetch(URL_PRODUCTOS + id, { method: 'DELETE' });
    }
}