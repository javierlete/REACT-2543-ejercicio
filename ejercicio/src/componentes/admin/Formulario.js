import LabelInput from "./LabelInput";

export default function Formulario({ producto, setProducto }) {
    return (
        <form>
            <LabelInput nombre="Id" id="id" tipo="number" requerido={false} soloLectura={true} valor={producto.id} />
            <LabelInput nombre="Nombre" id="nombre" tipo="text" textoMinimo="3" requerido={true} valor={producto.nombre} modificarValor={valor => setProducto({ ...producto, nombre: valor })} />
            <LabelInput nombre="Precio" id="precio" tipo="number" numeroMinimo="0" requerido={true} valor={producto.precio} modificarValor={valor => setProducto({ ...producto, precio: valor })}/>
            <LabelInput nombre="Descripción" id="descripcion" tipo="textarea" valor={producto.descripcion} modificarValor={valor => setProducto({ ...producto, descripcion: valor })} />
            <LabelInput nombre="Guardar" tipo="button" />
        </form>
    );
}