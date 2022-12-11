import items from '../../../data/cardapio.json';
import Item from './item/index';
import styles from './items.module.scss';
import { useState, useEffect } from 'react';

interface Iprops{
    buscar: string,
    filtro: number | null,
    ordenador: string
}
export default function Items({buscar, filtro, ordenador}: Iprops)
{
  const [lista, setLista] = useState(items);

  function testaBusca(title: string){
    const regex = new RegExp(buscar, 'i');
    return regex.test(title);
  }
  function testaFiltro(id: number){

    if(filtro !== null) return filtro === id;
    return true;
  }
  function ordenar(lista: typeof items)
  {   
    switch(ordenador)
    {
    case 'porcao':
      return lista.sort( (a, b) =>  a.size > b.size ? 1  : -1 );
    case 'qtd_pessoas':
      return lista.sort( (a, b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return lista.sort( ( a, b ) => a.price > b.price ? 1 : -1 );
    default:
      return lista;
    }
  }

  useEffect( ( ) => {
    const novaLista = items.filter( item => testaBusca(item.title) && testaFiltro(item.category.id));

    setLista(ordenar(novaLista));
  }, [buscar, filtro, ordenador]);

  return(
    <div className={styles.itens}>
      {
        lista.map( item => (
          <Item 
            key={item.id}
            {...item} />
        ))
      }
    </div>    
  );
}