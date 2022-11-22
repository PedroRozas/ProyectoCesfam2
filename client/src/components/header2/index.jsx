import logo from '../assets/logo.png';

export default function Header2() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      
        <img src={logo} alt='logo' className='mr-2' width={50}/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/recipes">Generar receta</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/newmed">Ingresar Medicamento</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/stock">Consultar Stock</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Crecetas">Consultar Recetas</a>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
  );
}