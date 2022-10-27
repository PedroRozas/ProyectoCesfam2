import styles from './styles.module.css';

const Main = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };
    return(
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Facebook</h1>
                <button type='button' className={styles.white_btn} onClick= {handleLogout} >Cerrar Sesion</button>
            </nav>
        </div>
    )
};

export default Main;