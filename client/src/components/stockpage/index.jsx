import "./stockstyles.css";

function StockPage() {
  return (
    <div className="stock_container">
      <h1 color="white">Consultar Stock</h1>
        <form className="meds_form">
          <input
            type="text"
            placeholder="Buscar por nombre"
            name="paciente"
            onChange=""
            value=""
            required
            className="input"
          />
          <button type="submit" className="stock_btn">
              Consultar
            </button>
          <div className="rowconsult">
            <div className="textconsult">MEDICAMENTO: </div> <div className="textconsult">hola</div> 
          </div>
          <div className="rowconsult">
            <div className="textconsult">CÓDIGO:</div> <div className="textconsult">hola</div> 
          </div>
          <div className="rowconsult">
            <div className="textconsult">TIPO: </div> <div className="textconsult">hola</div> 
          </div>
          <div className="rowconsult">
            <div className="textconsult">FABRICANTE: </div> <div className="textconsult">hola</div> 
          </div>
          <div className="rowconsult">
            <div className="textconsult">CANTIDAD</div> <div className="textconsult">hola</div> 
          </div>
          <div className="rowconsult">
            <div className="textconsult">GRAMAJE: </div> <div className="textconsult">hola</div> 
          </div>
          <div className="rowconsult">
            <div className="textconsult">BIOEQUIVALENTE</div> <div className="textconsult">hola</div> 
          </div>
          <div className="rowconsult">
            <div className="textconsult">UND. STOCK: </div> <div className="textconsult">hola</div> 
          </div>
          <div className="rowconsult">
            <div className="textconsult">UND. RESERVADAS: </div> <div className="textconsult">hola</div> 
          </div>
          
          
            
          
        </form>
      
    </div>
  );
}

export default StockPage;
