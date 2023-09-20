export default function Menu() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark mb-3" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Ejercicio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Principal</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="admin.html">Administración</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}