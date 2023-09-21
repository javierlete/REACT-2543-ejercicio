import Anuncios from './componentes/Anuncios';
import Fichas from './componentes/Fichas';
import Menu from './componentes/Menu';
import Pie from './componentes/Pie';

import { PRODUCTOS } from './constantes/productos';
import { MENUS } from './constantes/menus';
import { ANUNCIOS } from './constantes/anuncios';
import { REDES } from './constantes/redes';
import Listado from './componentes/admin/Listado';
import Formulario from './componentes/admin/Formulario';

export default function App() {
  return (
    <>
      <Menu menus={MENUS} />
      <main className="container">
        {/* <Fichas productos={PRODUCTOS} /> */}
        <Listado productos={PRODUCTOS} />
        <Formulario />
      </main>
      {/* <Anuncios anuncios={ANUNCIOS} /> */}
      <Pie redes={ REDES } />
    </>
  );
}

