import styles from './notfound.module.scss';
import stylesThema from '../../styles/tema.module.scss';
import { ReactComponent as NotFoundImage } from '../../assets/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

  const navigate = useNavigate();
  return (

    <div className={classNames({
      [styles.container]: true,
      [stylesThema.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>

  );

}