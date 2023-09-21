import Linea from "./Linea";

export default function Listado({ productos }) {
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
                {productos.map(producto => <Linea key={producto.id} producto={producto} />)}
            </tbody>
            <tfoot className="table-dark">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <a href="#" className="btn btn-sm btn-primary">Añadir</a>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}