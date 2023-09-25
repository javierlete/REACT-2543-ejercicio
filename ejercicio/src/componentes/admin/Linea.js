export default function Linea({ producto, setIdSeleccionado }) {
    return (
        <tr>
            <th>{producto.id}</th>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.descripcion}</td>
            <td>
                <a href="#" onClick={() => setIdSeleccionado(producto.id)} className="btn btn-sm btn-primary">Editar</a>
                <a href="#" className="btn btn-sm btn-danger">Eliminar</a>
            </td>
        </tr>
    );
}