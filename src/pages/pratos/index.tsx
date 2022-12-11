import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styles from './pratos.module.scss';
import classNames from 'classnames';
import cardapio from '../../data/cardapio.json';
import NotFound from '../NotFound';
import Header from '../../components/header/index';

export default function Pratos() {
  const { id } = useParams();
  const navigate = useNavigate();

  const prato = cardapio.find( item => item.id === Number(id));
  if(!prato)
  {
    return <NotFound/>;
  }
  
  return (
    <Header>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}> {prato.title}</h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
          <div className={styles.tags}>
            <div className={classNames({
              [styles.tags__tipo]: true,
              [styles[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true
            })}>
              {prato.category.label}
            </div>
            <div className={styles.tags__porcao}>
              {prato.size} g
            </div>
            <div className={styles.tags__qtdpessoas}>
              Serve até {prato.serving} Pessoa{prato.serving === 1 ? 's' : ''}
            </div>
            <div className={styles.tags__valor}>
              {prato.price.toFixed(2)}
            </div>
          </div>
        </div>
      </section>
    </Header>

  );
}