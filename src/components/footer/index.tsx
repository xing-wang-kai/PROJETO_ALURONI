import styles from './footer.module.scss';
import { BsSuitHeart } from 'react-icons/bs';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Footer() {
  return (
    <footer >
      <div className={`${styles.footer}`}>
        <Logo />
      </div>
      <div className={styles.container}>
        <hr />
        <br />
        <h3>Feito com  <BsSuitHeart className={styles.icon} />  por Kai Wang</h3>
        <br />
      </div>
    </footer>
  );
}