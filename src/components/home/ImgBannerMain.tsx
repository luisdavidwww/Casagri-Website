
import tractor from '../../static/Home/tractor.png'; // Asegúrate de tener una imagen en esta ruta
import "./ImgBannerMain.css";


const ImgBannerMain = () => {
  return (
    <div className="main-banner" >
      <img src={tractor} alt={tractor} className="banner-image" />
      <div className="banner-overlay">
        <h1 className="banner-title">
            76 años de la <br />
             Mano del Productor <br />
              Venezolano
        </h1>
        <a href=""className='content-btn'>
            <button className='btn-vermas'>Ver más</button>
        </a>
      </div>
    </div>
  );
};

export default ImgBannerMain;
