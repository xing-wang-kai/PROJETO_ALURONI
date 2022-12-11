import styles from './Cardapio.module.scss';
import { ReactComponent as ImgLogo} from '../../assets/logo.svg';
import Buscador from './buscador/index';
import Filtros from './filtros/index';
import { useState } from "react";
import Ordenador from './ordenador';
import Items from './items/index';

export default function Cardapio() {

    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number|null>(null);
    const [ordenador, setOrdenador] = useState("");

    return (
      <main >
        <nav className={styles.menu}>
                <ImgLogo/>
        </nav>
        <header className={styles.header}>
            <div className={styles.header__text}>
                A casa do código e da Massa!
            </div>
        
        </header>
        <section className={styles.cardapio}>
            <h3 className={styles.cardapio__titulo}>
                Cardápio
            </h3>
            <Buscador busca={busca} setBusca={setBusca}/>
            <div className={styles.cardapio__filtros}>
                <Filtros filtro={filtro} setFiltro={setFiltro} />
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
            </div>
            <Items buscar={busca} filtro={filtro} ordenador={ordenador}/>
        </section>
      </main> 
      )
}