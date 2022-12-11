import { Outlet } from 'react-router-dom';
import styles from './jumbotron.module.scss';

export default function Jumbotron() {
  return (
    <section>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da Massa!
        </div>
      </header>
    </section>

  );
}