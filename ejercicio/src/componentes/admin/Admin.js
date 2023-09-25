import Listado from "./Listado";
import Formulario from "./Formulario";

import { useState } from "react";
import { PRODUCTO_VACIO } from "../../constantes/productoVacio";

export default function Admin({ productos }) {
    const [ producto, setProducto ] = useState(PRODUCTO_VACIO);

    console.log('Admin', producto);

    return (
        <>
            {/* <pre>{JSON.stringify(producto)}</pre> */}
            <Listado productos={productos} setProducto={setProducto} />
            <Formulario producto={producto} setProducto={setProducto} />
        </>
    );
}