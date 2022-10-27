import { Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

const Login = () => {

    const [data,setData] = useState({
        
        email: '',
        password: ''
    });
  
    const [error, setError] = useState('');

    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]: input.value});
    };

    async function handleSubmit(e) {
        e.preventDefault();
        
        const response = await fetch('http://localhost:8000/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(data),
    })
        const data1 = await response.json();

        if (data1.user) {
            localStorage.setItem('token', data1.user);
            alert('Bienvenido');
            window.location.href = '/home';

        }
        else {
            alert('Usuario o contraseña incorrectos');
        }
        console.log(data1);
        
    };
    return(
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Iniciar Sesion</h1>
                        <input type='email' placeholder='Email' name='email' onChange={handleChange} value={data.email} required className={styles.input} />
                        <input type='password' placeholder='Contraseña' name='password' onChange={handleChange} value={data.password} required className={styles.input} />
                        {error && <div className={styles.error_msg}>
                            error
                        </div>}
                        <button type='submit' className={styles.green_btn}>Iniciar Sesion</button>
                    </form>
                </div>
                <div className={styles.right}>
                <h1>Nuevo?</h1>
                    <Link to= '/signup'>
                        <button type='button' className={styles.white_btn}>Registrar</button>
                    </Link>
                </div>
            </div>

            
         </div>   

    )
};

export default Login;