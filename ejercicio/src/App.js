import Anuncios from './componentes/Anuncios';
import Fichas from './componentes/Fichas';
import Menu from './componentes/Menu';
import Pie from './componentes/Pie';

import { PRODUCTOS } from './constantes/productos';
import { MENUS } from './constantes/menus';

export default function App() {
  return (
    <>
      <Menu menus={MENUS} />
      <main className="container">
        <Fichas productos={PRODUCTOS} />
      </main>
      <Anuncios />
      <Pie />
    </>
  );
}

