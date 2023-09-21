import Listado from "./Listado";
import Formulario from "./Formulario";

import { useState } from "react";

export default function Admin({ productos }) {
    const [ producto, setProducto ] = useState({});

    return (
        <>
            <pre>{JSON.stringify(producto)}</pre>
            <Listado productos={productos} setProducto={setProducto} />
            <Formulario producto={producto} setProducto={setProducto} />
        </>
    );
}