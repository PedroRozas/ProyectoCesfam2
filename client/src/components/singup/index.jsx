import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./styles.module.css";

const Singup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    birth: "",
    username: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const data1 = await response.json();
    if (data1.status === "ok") {
      navigate("/login");
    }
    else {
      alert('Email o nombre de usuario ya existen');
    }
  }

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <center>
            <h1>Ya tienes cuenta?</h1>
          </center>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Iniciar sesion
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Crear Cuenta</h1>
            <input
              type="text"
              placeholder="Nombre de Usuario"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Apellido"
              name="lastname"
              onChange={handleChange}
              value={data.lastname}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Telefono"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              required
              className={styles.input}
            />
            <input
              type="date"
              placeholder="Fecha"
              name="birth"
              onChange={handleChange}
              value={data.birth}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>error</div>}
            <button type="submit" className={styles.green_btn}>
              Crear Cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
