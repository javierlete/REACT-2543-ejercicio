export default function LabelInput() {
    return (
        <div class="row mb-3">
            <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm">
                <input type="text" required minlength="3" class="form-control" id="nombre" />
            </div>
        </div>
    );
}