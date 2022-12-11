import styles from './menu.module.scss';
import { ReactComponent as ImgLogo } from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Menu() {

  const routes = [
    {
      label: 'Inicio',
      to: '/'
    },
    {
      label: 'Cardapio',
      to: '/cardapio'
    },
    {
      label: 'Sobre',
      to: '/sobre'
    }
  ];

  return (
    <nav className={styles.menu}>
      <ImgLogo />
      <ul className={styles.menu__list}>
        {
          routes.map((item, index) => (
            <li key={index} className={styles.menu__link}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}