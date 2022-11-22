import "./recipesstyles.css";
import { useState } from "react";

function Recipes() {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    birth: "",
    username: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const [error, setError] = useState("");

  return (
    <div className="recipes_container">
        <center><h1>Generar Receta</h1></center>
      <div className="form_container">
        <form className="recipes_form_container">
          <div className="left">
            <input
              type="text"
              placeholder="Nombre de Paciente"
              name="paciente"
              onChange={handleChange}
              value={data.username}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Apellido del Pacienter"
              name="lastnamepaciente"
              onChange={handleChange}
              value={data.name}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="rut del Paciente"
              name="rutpaciente"
              onChange={handleChange}
              value={data.lastname}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Edad del paciente"
              name="agepaciente"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Sexo del paciente"
              name="sexodelpaciente"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Medico responsable"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              required
              className="input"
            />
          </div>
          <div className="right_form_recipes">
            <input
              type="text"
              placeholder="Observaciones"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              required
              className="inputObservations"
            />
            <input
              type="text"
              placeholder="Prescripcion"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              required
              className="inputObservations"
            />
            {error && <div className="error_msg">error</div>}
            <button type="submit" className="recipe_btn">
              Generar receta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Recipes;
