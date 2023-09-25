import Listado from "./Listado";
import Formulario from "./Formulario";

import { useEffect, useState } from "react";
import { PRODUCTO_VACIO } from "../../constantes/productoVacio";
import { URL_PRODUCTOS } from "../../constantes/globales";

export default function Admin({ productos }) {
    const [idSeleccionado, setIdSeleccionado] = useState(null);
    const [producto, setProducto] = useState(PRODUCTO_VACIO);

    useEffect(() => {
        idSeleccionado && fetch(URL_PRODUCTOS + idSeleccionado)
            .then(respuesta => respuesta.json())
            .then(producto => setProducto(producto))
    }
        , [idSeleccionado]
    );

    console.log('Admin', producto);

    return (
        <>
            {/* <pre>{JSON.stringify(producto)}</pre> */}
            <pre>{idSeleccionado}</pre>
            <Listado productos={productos} setIdSeleccionado={setIdSeleccionado} />
            <Formulario producto={producto} setProducto={setProducto} />
        </>
    );
}