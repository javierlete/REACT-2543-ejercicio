export default function Pie() {
    return (
        <footer className="p-2 text-bg-dark d-flex flex-column">
            <p className="text-center">&copy; 2023 Javier Lete</p>
            <ul className="list-unstyled d-flex justify-content-around">
                <li><a className="text-white" href=""><i className="bi bi-facebook"></i></a></li>
                <li><a className="text-white" href=""><i className="bi bi-twitter"></i></a></li>
                <li><a className="text-white" href=""><i className="bi bi-youtube"></i></a></li>
                <li><a className="text-white" href=""><i className="bi bi-tiktok"></i></a></li>
                <li><a className="text-white" href=""><i className="bi bi-instagram"></i></a></li>
            </ul>
        </footer>
    );
}