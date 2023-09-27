import { URL_BASE } from '../constantes/globales';
import axios from 'axios';

const URL_PRODUCTOS = 'http://localhost:3000/productos/';

export default class ProductoService {
    static async getProductos() {
        try {
            const respuesta = await axios.get(URL_PRODUCTOS);
            return respuesta.data;
        } catch (err) {
            alert('No se ha podido obtener los productos');
            return [];
        }
    }

    static async getProducto(id) {
        return (await axios.get(URL_PRODUCTOS + id)).data;
    }

    static async postProducto(producto) {
        delete producto.id;
        const respuesta = await axios.post(URL_PRODUCTOS, producto);
        return respuesta.data;
    }

    static async putProducto(producto) {
        const respuesta = await axios.put(URL_PRODUCTOS + producto.id, producto);
        return respuesta.data;
    }

    static async patchProducto(producto) {
        const respuesta = await axios.patch(URL_PRODUCTOS + producto.id, producto);
        return respuesta.data;
    }

    static async deleteProducto(id) {
        return await axios.delete(URL_PRODUCTOS + id);
    }
}