import "./styles.css";
import { useState } from "react";

function NewMeds() {
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
    <div className="meds_container">
        <center><h1>Ingresar Medicamento</h1></center>
      <div className="form_container"> 
        <form className="meds_form_container">
          <div className="leftmeds">
            <input
              type="text"
              placeholder="Nombre del Medicamento"
              name="paciente"
              onChange={handleChange}
              value={data.username}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Codigo del Medicamento"
              name="lastnamepaciente"
              onChange={handleChange}
              value={data.name}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Tipo de Medicamento"
              name="rutpaciente"
              onChange={handleChange}
              value={data.lastname}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Fabricante"
              name="agepaciente"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Cantidad"
              name="sexodelpaciente"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Dosis"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Bioequivalente"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              required
              className="input"
            />
            {error && <div className="error_msg">error</div>}
            <button type="submit" className="green_btn">
              Ingresar
            </button>
            </div>
          
        </form>
      </div>
    </div>
  );
}
export default NewMeds;
