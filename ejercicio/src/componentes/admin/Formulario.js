import LabelInput from "./LabelInput";

export default function Formulario({ producto }) {
    return (
        <form>
            <LabelInput nombre="Id" id="id" tipo="number" requerido={false} valor={producto.id} />
            <LabelInput nombre="Nombre" id="nombre" tipo="text" textoMinimo="3" requerido={true} valor={producto.nombre} />
            <LabelInput nombre="Precio" id="precio" tipo="number" numeroMinimo="0" requerido={true} valor={producto.precio} />
            <LabelInput nombre="Descripción" id="descripcion" tipo="textarea" valor={producto.descripcion} />
            <LabelInput nombre="Guardar" tipo="button" />
        </form>
    );
}