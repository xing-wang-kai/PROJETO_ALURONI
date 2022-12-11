import styles from './item.module.scss';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

interface Iitem{
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    id: number;
    category: {
        id: number;
        label: string;
    };
}


export default function Item({title, description, photo, size, serving, price, id,  category}: Iitem) {

  const navigate = useNavigate();

  return(
    <div className={styles.item} onClick={()=> navigate(`/prato/${id}`)}>
      <figure className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </figure>

      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles['item__tipo']]:true,
            [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
          })}>{category.label}</div>
          <div className={styles.item__porcao}>{size}g</div>
          <div className={styles.item__qtdpessoas}>serve até {serving} pessoa{serving === 1? '': 's'}</div>
          <div className={styles.item__valor}>R$: {price.toFixed(2)}</div>
        </div>
      </div>

    </div>
  );
}

