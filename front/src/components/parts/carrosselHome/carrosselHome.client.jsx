import {Image, Link} from '@shopify/hydrogen';
import Styles from './carrosselHome.css';

const carrosselHome = () => {
  return (
    <div className={Styles.divSuperior + ' ' + 'background-image-banner'}>
      <div className={Styles.textosSuperior + ' ' + 'text-banner'}>
        <h1>Ritualiza</h1>
        <h6>Seu ritual de skincare personalizado</h6>
        <p>
          Você nos conta como é a sua pele, hábitos e objetivos. Nós fazemos a
          fórmula específica pra você!
        </p>
        <Link className="btn" to="/quiz">
          Responda o Quiz
        </Link>
      </div>
      <div className="carousel-div">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className={Styles.carrossel + ' ' + 'carousel-item active'}>
              <Image
                src="https://static.wixstatic.com/media/3b7294_950acdbdd8324c18bb63086813f86c7b~mv2.jpg/v1/fill/w_492,h_392,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b7294_950acdbdd8324c18bb63086813f86c7b~mv2.jpg"
                className="d-block"
                alt="..."
                height={250}
                width={250}
              />
            </div>
            <div className={Styles.carrossel + ' ' + 'carousel-item'}>
              <Image
                src="https://static.wixstatic.com/media/3b7294_2ef10b70ac5d47faa7c455544695819f~mv2.jpg/v1/fill/w_492,h_392,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b7294_2ef10b70ac5d47faa7c455544695819f~mv2.jpg"
                className="d-block"
                alt="..."
                height={250}
                width={250}
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default carrosselHome;
