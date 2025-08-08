
//imagenes 
import vnzla  from '../../static/Home/vnzla.png';

//estilos
import './Odoo.css';

const Odoo = () => {


  return (
    <>
            <div className='containerOdoo-Section' >
              <div className='containerOdoo'>
                      <div>
                        <img className='imgOdoo-Alt' src={vnzla} alt={vnzla} />
                      </div>
              </div>
              <div className='odoo-Info-Alt' >
                        <div className='odoo-Info-Alt-content'>
                          <h1 className='title-basic-start-Odoo alteraditoN'>De la Mano del Productor Venezolano</h1>
                          <p className='text-basic' >Somos una compañía sólida con mas de 70 años de trayectoria, 
                            reconocidos por nuestro compromiso, responsabilidad y servicio brindado colaborando 
                            con el sector agroalimentario del país.
                          </p>
                        </div>
              </div>
              
            </div>
        
    </>
  )
}

export default Odoo;