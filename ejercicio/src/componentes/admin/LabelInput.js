export default function LabelInput({ nombre, id, tipo, requerido, textoMinimo, numeroMinimo, valor, onEnviar }) {
    let control;

    switch(tipo) {
        case 'textarea':
            control = <textarea required={requerido} minLength={textoMinimo} min={numeroMinimo} className="form-control" id={id} value={valor}/>;
            break;
        case 'button':
            control = <button onClick={onEnviar} type="submit" className="btn btn-primary">{nombre}</button>;
            break;
        default:
            control = <input type={tipo} required={requerido} minLength={textoMinimo} min={numeroMinimo} className="form-control" id={id} value={valor} />;
    }
    return (
        <div className="row mb-3">
            {tipo !== 'button' && <label htmlFor={id} className="col-sm-2 col-form-label">{nombre}</label>}
            <div className={'col-sm ' + (tipo === 'button' ? 'offset-sm-2' : '')}>
                {control}
            </div>
        </div>
    );
}