export default function Listado() {
    return (
        <table class="table table-hovered table-striped table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>Producto 1</td>
                    <td>100</td>
                    <td>Descripción del producto 1</td>
                    <td>
                        <a href="#" class="btn btn-sm btn-primary">Editar</a>
                        <a href="#" class="btn btn-sm btn-danger">Eliminar</a>
                    </td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Producto 2</td>
                    <td>200</td>
                    <td>Descripción del producto 2</td>
                    <td>
                        <a href="#" class="btn btn-sm btn-primary">Editar</a>
                        <a href="#" class="btn btn-sm btn-danger">Eliminar</a>
                    </td>
                </tr>
            </tbody>
            <tfoot class="table-dark">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <a href="#" class="btn btn-sm btn-primary">Añadir</a>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}