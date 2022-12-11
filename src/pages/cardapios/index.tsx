import styles from './Cardapio.module.scss';
import stylesThema from '../../styles/tema.module.scss';

import Buscador from './buscador/index';
import Filtros from './filtros/index';
import { useState } from 'react';
import Ordenador from './ordenador';
import Items from './items/index';

export default function Cardapio() {

  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number|null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (
    <main >

      <section className={styles.cardapio}>
        <h3 className={stylesThema.titulo}>
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
  );
}