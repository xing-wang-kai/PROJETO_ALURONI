

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Cardapio from './pages/cardapios';
import Inicio from './pages/inicio';
import Sobre from './pages/sobre';
import Footer from './components/footer/index';
import Header from './components/header/index';
import NotFound from './pages/NotFound';


export default function AppRouter() {
  return (
    <Router>
      <Routes>

        <Route exact path='/'         element={<Header/>  }    >
          <Route index element={<Inicio/>} />
          <Route exact path='cardapio' element={<Cardapio/>}  />
          <Route exact path='sobre'    element={<Sobre/>}     />
        </Route>

        <Route       path='*'         element={ <NotFound/> } />
      </Routes>
      <Footer/>
    </Router>
  );
}