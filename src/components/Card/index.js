import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    // ehFavorito verifica se o card está sendo impresso dentro da lista de favorito
    const ehFavorito = favorito.some((fav) => fav.id === id);
    // ? para true e : para false
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <Link className={styles.link} to={`/${id}`}>
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt="Favoritar filme"
                className={styles.favorito}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa }) 
            }} />
        </div>

    )
}

export default Card;