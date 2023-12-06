import styles from '../../styles/Profiles.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
function Profile({ user = {} }) {
    return (

        <div className={styles.body2}>
            <Navbar />


            <div className={styles.profile}>
                <p className={styles.p1}><span className={styles.p2}>Animal:</span> {user.nome}</p>
                <p className={styles.p1}><span className={styles.p2}>Usuario:</span> {user.usuario}</p>
                <p className={styles.p1}><span className={styles.p2}>Data:</span> {user.data_inclusao}</p>
                <p className={styles.p1}><span className={styles.p2}>Palavras Chave:</span> {user.palavras_chave}</p>
                <p className={styles.p1}><span className={styles.p2}>Revisor:</span> {user.usuario_revisor}</p>
                <p className={styles.p1}><span className={styles.p2}>Editor:</span> {user.usuario_editor}</p>
                <p className={styles.p1}><span className={styles.p2}>Descrição:</span> {user.descricao}</p>
            </div>
            <div className={styles.voltar}> <a href="/lista"> Voltar </a> </div>
            <div className={styles.nada}></div>
            <Footer />
        </div>

    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})
export async function getStaticPaths() {
    const paths = [];
    for (let i = 0; i <= 99; i++) {
        paths.push({ params: { id: String(i) } });
    }
    return {
        paths,
        fallback: false,
    };
}
export default Profile;
