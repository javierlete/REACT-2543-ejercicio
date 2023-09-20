import Ficha from "./Ficha";

export default function Fichas() {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <Ficha />
            <Ficha />
        </div>
    );
}