import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaRestaurantes from './paginas/Administracao/Restaurantes/AdministracaRestaurantes';
import FormularioRestaurante from './paginas/Administracao/Restaurantes/FormularioRestaurante';
import PaginaBaseAdmin from './paginas/Administracao/Restaurantes/PaginaBaseAdmin';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path='/admin'element={<PaginaBaseAdmin/>}>
      <Route path="restaurantes" element={<AdministracaRestaurantes />} />
      <Route path="restaurantes/novo" element={<FormularioRestaurante />} />
      <Route path="restaurantes/:id" element={<FormularioRestaurante />} />
      </Route>
    </Routes>
  );
};

export default App;
