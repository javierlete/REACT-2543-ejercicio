import Linea from "./Linea";

export default function Listado({ productos, setIdSeleccionado, setProductos }) {
    return (
        <table className="table table-hovered table-striped table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => <Linea key={producto.id} producto={producto} setIdSeleccionado={setIdSeleccionado} setProductos={setProductos} />)}
            </tbody>
            <tfoot className="table-dark">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <button type="button" onClick={() => setIdSeleccionado(null)} className="btn btn-sm btn-primary">Añadir</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}