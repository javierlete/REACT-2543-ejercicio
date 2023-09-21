export default function Formulario() {
    return (
        <form>
            <div class="row mb-3">
                <label for="id" class="col-sm-2 col-form-label">Id</label>
                <div class="col-sm">
                    <input type="number" readonly class="form-control" id="id" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm">
                    <input type="text" required minlength="3" class="form-control" id="nombre" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="precio" class="col-sm-2 col-form-label">Precio</label>
                <div class="col-sm">
                    <input type="number" step=".01" required min="0" class="form-control" id="precio" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="descripcion" class="col-sm-2 col-form-label">Descripción</label>
                <div class="col-sm">
                    <textarea class="form-control" id="descripcion"></textarea>
                </div>
            </div>
            <div class="row mb-3">
                <div class="offset-sm-2 col-sm">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </form>
    );
}