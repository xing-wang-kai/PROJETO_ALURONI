import cardapio from '../../data/cardapio.json';
import styles from './inicio.module.scss';
import stylesThema from '../../styles/tema.module.scss';
import nossaCasa from '../../assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

export default function Inicio() {

  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  function redirectToDetails(prato: typeof cardapio[0]) {
    navigate(`/prato/${prato.id}`, { state: { prato } });
  }

  return (
    <section>
      <h3 className={stylesThema.titulo}>recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {
          pratosRecomendados.map((item) => (
            <div key={item.id} className={styles.recomendados}>
              <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button
                className={styles.recomendado__botao}
                onClick={() => redirectToDetails(item)}
              >
                ver mais
              </button>
            </div>
          ))
        }
      </div>
      <h3 className={stylesThema.titulo}> Nossa Casa </h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Aluroni" />
        <address className={styles.nossaCasa__endereço}>
          Rua Vergueiro, 3185 <br /><br />
          vila Mariana - SP
        </address>
      </div>
    </section>
  );
}