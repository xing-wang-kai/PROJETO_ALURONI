

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
import Pratos from './pages/pratos';


export default function AppRouter() {
  return (
    <Router>
      <Routes>

        <Route    path='/'         element={<Header/>  }    >
          <Route  index            element={<Inicio/>}     />
          <Route  path='cardapio'  element={<Cardapio/>}   />
          <Route  path='sobre'     element={<Sobre/>}      />
          
          
        </Route>
        <Route  path='/prato/:id'element={<Pratos/>}     />
        <Route    path='*'        element={ <NotFound/> } />
      </Routes>
      <Footer/>
    </Router >
  );
}