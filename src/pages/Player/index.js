import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import styles from './Player.module.css';
import videos from 'json/db.json';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';


function Player() {
    // useParams retorna um objeto de valores/chaves que foram passados como parâmetros dinâmicos da URL atual
    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })
    if (!video) {
        return <NaoEncontrada />
    }
    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/BwRxBGsT_f0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </section>
        </>
    )
}

export default Player;