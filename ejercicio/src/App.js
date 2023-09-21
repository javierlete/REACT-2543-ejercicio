import Admin from './componentes/admin/Admin';
import Anuncios from './componentes/Anuncios';
import Fichas from './componentes/Fichas';
import Menu from './componentes/Menu';
import Pie from './componentes/Pie';

import { PRODUCTOS } from './constantes/productos';
import { MENUS } from './constantes/menus';
import { ANUNCIOS } from './constantes/anuncios';
import { REDES } from './constantes/redes';


export default function App() {
  return (
    <>
      <Menu menus={MENUS} />
      <main className="container">
        {/* <Fichas productos={PRODUCTOS} /> */}
        <Admin productos={PRODUCTOS} />
      </main>
      {/* <Anuncios anuncios={ANUNCIOS} /> */}
      <Pie redes={ REDES } />
    </>
  );
}

