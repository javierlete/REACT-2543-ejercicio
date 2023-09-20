import Anuncios from './componentes/Anuncios';
import Fichas from './componentes/Fichas';
import Menu from './componentes/Menu';
import Pie from './componentes/Pie';

export default function App() {
  return (
    <>
      <Menu />
      <main class="container">
        <Fichas />
      </main>
      <Anuncios />
      <Pie />
    </>
  );
}

