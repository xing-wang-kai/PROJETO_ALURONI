import styles from './sobre.module.scss';
import stylesTheme from '../../styles/tema.module.scss';
import Casa from '../../assets/casa.png';
import massa1 from '../../assets/massa1.png';
import massa2 from '../../assets/massa2.png';

export default function Sobre() {

  const imagens = [massa1, massa2];

  return (
    <section>
      <h3 className={stylesTheme.titulo}>Sobre Aluroni</h3>
      <div className={styles.sobreNos}>
        <img src={Casa} alt="Casa Aluroni" />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt="Massas da Aluroni" />
          </div>
        ))}
      </div>
    </section>
  );
}