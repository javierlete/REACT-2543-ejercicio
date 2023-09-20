export default function Menu() {
    return <nav class="navbar navbar-expand-sm bg-dark mb-3" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Ejercicio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Principal</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="admin.html">Administración</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}