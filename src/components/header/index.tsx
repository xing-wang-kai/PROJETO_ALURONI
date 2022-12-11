import Jumbotron from './jumbotron';
import Menu from './menu';
import { Outlet } from 'react-router-dom';
import styleThema from '../../styles/tema.module.scss';

export default function Header( { children } : { children? : React.ReactNode}) {
  return (
    <main className='container'>
      <header>
        <Menu />
        <Jumbotron />
      </header>
      <div className={styleThema.container}>
        <Outlet />
        { children}
      </div>
    </main>
  );
}