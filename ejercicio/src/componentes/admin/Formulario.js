import LabelInput from "./LabelInput";

export default function Formulario() {
    return (
        <form>
            <LabelInput nombre="Id" id="id" tipo="number" requerido={false} />
            <LabelInput nombre="Nombre" id="nombre" tipo="text" textoMinimo="3" requerido={true} />
            <LabelInput nombre="Precio" id="precio" tipo="number" numeroMinimo="0" requerido={true} />
            <LabelInput nombre="Descripción" id="descripcion" tipo="textarea" />
            <LabelInput nombre="Guardar" tipo="button" />
        </form>
    );
}