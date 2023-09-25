import Admin from './componentes/admin/Admin';
import Anuncios from './componentes/Anuncios';
import Fichas from './componentes/Fichas';
import Menu from './componentes/Menu';
import Pie from './componentes/Pie';

import { MENUS } from './constantes/menus';
import { ANUNCIOS } from './constantes/anuncios';
import { REDES } from './constantes/redes';
import { useEffect, useState } from 'react';


export default function App() {
  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    fetch('json/productos.json')
      .then(respuesta => respuesta.json())
      .then(productos => setProductos(productos));
  }, []);

  return (
    <>
      <Menu menus={MENUS} />
      <main className="container">
        {/* <Fichas productos={PRODUCTOS} /> */}
        <Admin productos={productos} />
      </main>
      {/* <Anuncios anuncios={ANUNCIOS} /> */}
      <Pie redes={ REDES } />
    </>
  );
}

