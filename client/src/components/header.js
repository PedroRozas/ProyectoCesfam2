import logo from './assets/logo.png';

export default function header() {
  return (
    <nav
       className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid"> 
            
                <div className='d-flex'>
                    <img src={logo} alt='logo' className='mr-2' width={50}/>
                 
                </div>
            
        </div>
       </nav>
  )
}
