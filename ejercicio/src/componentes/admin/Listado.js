import Linea from "./Linea";

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
                <Linea />
                <Linea />
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