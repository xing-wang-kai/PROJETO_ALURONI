import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface IOrdenador{
    ordenador: string,
    setOrdenador:  React.Dispatch<React.SetStateAction<string>>
}



export default function Ordenador({ordenador, setOrdenador}:IOrdenador){

  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;


  return (
    <button className={classNames({
      [styles.ordenador]: true,
      [styles['ordenador--ativo']]: ordenador !== ''
    })} 
    onClick={() => setAberto(!aberto)}
    onBlur={()=> setAberto(false)}>

      <span>{ nomeOrdenador ||  'Ordenar por:' }</span>

      {
        aberto ? <MdKeyboardArrowUp size={28}/> : <MdKeyboardArrowDown size={28} />
      }

      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto
      })}>
        {
          opcoes.map( option => (
            <div key={option.value} 
              className={styles.ordenador__option}
              onClick={() => setOrdenador(option.value) }
            >
              {option.nome}
            </div>
          ))
        }    
      </div>  
    </button>
  );
}