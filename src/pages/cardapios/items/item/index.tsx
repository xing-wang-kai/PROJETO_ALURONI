import styles from './item.module.scss'
import logo from "../../../../assets/logo.svg"
import classNames from 'classnames';


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

export default function Item({title, description, photo, size, serving, price,  category}: Iitem) {
    return(
        <div className={styles.item}>
            <figure className={styles.item__imagem}>
                <img src={photo} alt="Figura do item" />
            </figure>

            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles["item__tipo"]]:true,
                        [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
                    })}>{category.label}</div>
                    <div className={styles.item__porcao}>{size}g</div>
                    <div className={styles.item__qtdpessoas}>serve até {serving} pessoa{serving === 1? "": "s"}</div>
                    <div className={styles.item__valor}>R$: {price.toFixed(2)}</div>
                </div>
            </div>

        </div>
    )
}

