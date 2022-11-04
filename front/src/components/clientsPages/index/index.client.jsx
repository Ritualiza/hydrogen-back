// import Styles from './index.css';
import './index.css';
import Contato from '../../parts/contato/Contato.client';
import CarrosselHome from '../../parts/carrosselHome/carrosselHome.client';
import {Image, Link} from '@shopify/hydrogen';
import WhatsappButton from '../../parts/whatsappButton/WhatsappButton.client';

const Index = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Ritualiza" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Ritualiza</title>
      </head>
      <WhatsappButton />
      <div className="banner">
        <CarrosselHome />
      </div>
      <section className="ritual">
        <div className="ritual-title">
          <h4>COMO CRIAR SEU RITUAL</h4>
        </div>
        <div className="steps">
          <div className="card-steps">
            <Image
              src="https://static.wixstatic.com/media/11062b_d946d8aad50f410b960b0e4d01e9ab5e~mv2.jpeg/v1/fill/w_247,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Amigas%20femininas.jpeg"
              alt="card1"
              width={250}
              height={250}
            />
            <h5>1- Sobre você e sua pele</h5>
            <p>
              Você preenche o quiz da pele. Nele você nos conta um pouco sobre
              as características da sua pele, seus hábitos e objetivos de
              skincare.
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
          <div className="card-steps">
            <Image
              src="https://static.wixstatic.com/media/11062b_c094368592194853975b6a9305c5add0~mv2.jpg/v1/fill/w_271,h_151,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/homeopatia.jpg"
              alt=""
              width={250}
              height={250}
            />
            <h5>2- Adquirindo os produtos</h5>
            <p>
              Depois de responder o quiz, você terá acesso às informações sobre
              os ingredientes naturais de alta performance que farão parte do
              seu ritual. Recomendamos 4 produtos para uma rotina minimalista.
              Adicione ao carrinho as suas escolhas.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
            />
          </svg>
          <div className="card-steps">
            <Image
              src="https://static.wixstatic.com/media/11062b_eaa40b14d9dd4799933c1f366d25a6fc~mv2.jpg/v1/fill/w_271,h_151,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Clube%20de%20assinatura.jpg"
              alt=""
              width={250}
              height={250}
            />
            <h5>3- Ritualizando</h5>
            <p>
              Pode relaxar, que agora é com a gente! Em até 7 dias seus produtos
              serão preparados e enviados fresquinhos pra você. Seu kit
              Ritualiza chegará na porta de casa e você poderá começar seu
              ritual diário de cuidado com a pele.
            </p>
          </div>
        </div>
        <Link className="btn" to="/quiz">
          Responda o Quiz
        </Link>
      </section>
      <section className="base-catalog">
        <div className="base-catalog-header">
          <h4 className="base-catalog-infos">
            minimalista & alta performance & sem desperdício
          </h4>
        </div>
        <div className="base-catalog-itens">
          <div className="catalog-card">
            <div className="card-catalog">
              <Image
                src="https://static.wixstatic.com/media/3b7294_9a89df32da9e4c9fadb99c3ba41e554e~mv2.jpg/v1/crop/x_656,y_0,w_1307,h_1742/fill/w_242,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gel%20de%20limpeza%201.jpg"
                alt="produto1-img"
                width={250}
                height={250}
              />
              <p className="name-card">GEL DE LIMPEZA</p>
              <p>a partir de R$74,40</p>
            </div>

            <div className="card-texts-catalog">
              <p className="base-catalog-header">PASSO 1 DO SEU RITUAL</p>
              <p className="base-catalog-subHeader">
                Para uma limpeza suave e eficaz.
              </p>
              <p className="base-catalog-description">
                Feito com tensoativo vegetal, livre de sulfatos, protege a
                barreira natural da pele e também o meio ambiente!
              </p>
            </div>
          </div>

          <div className="catalog-card">
            <div className="card-catalog">
              <Image
                src="https://static.wixstatic.com/media/3b7294_9f494679a23d4c3b85bad60d9bf1a966~mv2.jpg/v1/crop/x_671,y_0,w_1299,h_1742/fill/w_237,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/spray%201.jpg"
                alt="produto1-img"
                width={250}
                height={250}
              />
              <p className="name-card">BRUMA TERMAL</p>
              <p>a partir de R$71,90</p>
            </div>

            <div className="card-texts-catalog">
              <p className="base-catalog-header">PASSO 1 DO SEU RITUAL</p>
              <p className="base-catalog-subHeader">
                Para uma limpeza suave e eficaz.
              </p>
              <p className="base-catalog-description">
                Feito com tensoativo vegetal, livre de sulfatos, protege a
                barreira natural da pele e também o meio ambiente!
              </p>
            </div>
          </div>

          <div className="catalog-card">
            <div className="card-catalog">
              <Image
                src="https://static.wixstatic.com/media/3b7294_8e3bb2319e264f468971602039fcfaba~mv2.jpg/v1/crop/x_523,y_0,w_1117,h_1484/fill/w_242,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Serum%201.jpg"
                alt="produto1-img"
                width={250}
                height={250}
              />
              <p className="name-card">SÉRUM</p>
              <p>a partir de R$88,00</p>
            </div>

            <div className="card-texts-catalog">
              <p className="base-catalog-header">PASSO 1 DO SEU RITUAL</p>
              <p className="base-catalog-subHeader">
                Para uma limpeza suave e eficaz.
              </p>
              <p className="base-catalog-description">
                Feito com tensoativo vegetal, livre de sulfatos, protege a
                barreira natural da pele e também o meio ambiente!
              </p>
            </div>
          </div>

          <div className="catalog-card">
            <div className="card-catalog">
              <Image
                src="https://static.wixstatic.com/media/3b7294_8a18f3c001074775a6eb0c68cddda996~mv2.jpg/v1/crop/x_523,y_0,w_1120,h_1484/fill/w_242,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%C3%B3leo%20facial%201.jpg"
                alt="produto1-img"
                width={250}
                height={250}
              />
              <p className="name-card">ÓLEO NUTRITIVO</p>
              <p>a partir de R$76,80</p>
            </div>

            <div className="card-texts-catalog">
              <p className="base-catalog-header">PASSO 1 DO SEU RITUAL</p>
              <p className="base-catalog-subHeader">
                Para uma limpeza suave e eficaz.
              </p>
              <p className="base-catalog-description">
                Feito com tensoativo vegetal, livre de sulfatos, protege a
                barreira natural da pele e também o meio ambiente!
              </p>
            </div>
          </div>
        </div>

        <div className="base-catalog-texts"></div>
      </section>
      <section className={'Styles.sectionAbout' + ' about-products'}>
        <div className="about-container">
          <h2>NOSSAS ESCOLHAS</h2>
          <div className="about-quality">
            <Image
              src="https://static.wixstatic.com/media/3b7294_ace8bb2dd688452986e85c4c34690a9f~mv2.png/v1/fill/w_107,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/INGREDIENTES%20NATURAIS.png"
              alt=""
              width={250}
              height={250}
            />
            <Image
              src="https://static.wixstatic.com/media/3b7294_d6cc68ac699949f3b9d245468ef0c7ea~mv2.png/v1/fill/w_177,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SEM%20PARABENOS.png"
              alt=""
              width={250}
              height={250}
            />
            <Image
              src="https://static.wixstatic.com/media/3b7294_ee0535efeec34f1297d664091b7ca874~mv2.png/v1/fill/w_146,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/BELEZA%20LIMPA.png"
              alt=""
              width={250}
              height={250}
            />
            <Image
              src="https://static.wixstatic.com/media/3b7294_f66ab1c507834eeead5b69cb5064cb4e~mv2.png/v1/fill/w_122,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PERSONALIZADO.png"
              alt=""
              width={250}
              height={250}
            />
            <Image
              src="https://static.wixstatic.com/media/3b7294_1e90b6875a2446fda46aed025196d458~mv2.png/v1/fill/w_136,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/VEGANO.png"
              alt=""
              width={250}
              height={250}
            />
          </div>
          <div className="about-nature-responsabilty">
            <Image
              src="https://static.wixstatic.com/media/3b7294_f0b4c39b7a0a41299c1c026396a8e889~mv2.gif"
              alt=""
              width={250}
              height={250}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              className="bi bi-recycle"
              viewBox="0 0 16 16"
              style={{color: '#9d6147'}}
            >
              <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
            </svg>
            <p>
              FÓRMULAS BIODEGRADÁVEIS EMBALAGENS DE VIDRO, REUTILIZÁVEL E
              RECICLÁVEL. *Não descarte sua embalagem! Em breve novidades.
            </p>
          </div>
          <Link className="btn" to="/quiz">
            Responda o Quiz
          </Link>
        </div>
      </section>
      <section className="section-banner-infos">
        <div className="banner-infos">
          <h4>Cuidando da sua pele e do planeta !</h4>
          <div className="steps-for-ritual">
            <Image
              src="https://static.wixstatic.com/media/3b7294_bd939f7a13d7465aa12fe5472febd945~mv2.jpg/v1/fill/w_359,h_239,fp_0.50_0.50,q_90,enc_auto/3b7294_bd939f7a13d7465aa12fe5472febd945~mv2.webp"
              alt=""
              width={300}
              height={300}
            />
            <span href="">
              RITUAL MINIMALISTA: OS 4 PASSOS DE SKINCARE PARA A MELHOR PELE DA
              SUA VIDA!
            </span>
          </div>
          <Link className="btn btn-outline-dark" to="/blog">
            Saber Mais
          </Link>
        </div>
      </section>
      <Contato />
    </>
  );
};

export default Index;
