import {useState} from 'react';
import './contato.css';

import imgInicial from '../../../images/imagem-form.webp';
import facebook from '../../../images/logo-face.webp';
import instagram from '../../../images/logo-insta.webp';
import {Image} from '@shopify/hydrogen';
// import {Input} from '~/components';

function Contato() {
  // const {fetchAllProducts, products, checkout, addItemToCheckout,removeLineItem} = useContext(AppContext);
  const [dadosContato, setDadosContato] = useState({
    nome: '',
    email: '',
    endereco: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('api/saveDataContact', {
        method: 'POST',
        body: JSON.stringify(dadosContato),
      });

      // const dataAPI = await resp.json();
      //   if (resp.status === 203) {
      //     localStorage.setItem(
      //       'quiz',
      //       JSON.stringify({...data, isAlreadySaved: true}),
      //     );
      //   }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center m-auto content-center font-['EB Garamond', 'sans-serif'] text-[#9b6448] p-10 overflow-y-scroll">
      <div className="flex justify-center text-[rgb(222,195,182)] leading-1">
        <form
          className="flex justify-center p-10 w-1000 bg-[#506D85]"
          onSubmit={handleSubmit}
        >
          <div className="divEsquerda">
            <Image
              src={imgInicial}
              alt="Imagem Produto"
              className="imgInicial"
              width={400}
              height={400}
            />
            <p className="faleComAGente">FALE COM A GENTE</p>
            <a
              href="mailto:sac@ritualizacosmeticos.com.br"
              className="sendEmail"
            >
              sac@ritualizacosmeticos.com.br
            </a>
            <p className="sendEmail">
              Telefone:<a href="tel:+55 (48) 99607-7930">+55 (48) 99607-7930</a>
            </p>
            <a
              className="sendWhatsapp"
              href="https://api.whatsapp.com/send?phone=55554896077930"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <p className="textRedesSociais">Nossas Redes Sociais</p>
            <div className="divRedesSociais">
              <a
                href="https://www.facebook.com/people/Ritualiza-Cosm%C3%A9ticos/100074086808897/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={facebook}
                  alt="Imagem facebook"
                  className="imgFace"
                  width={60}
                  height={60}
                />
              </a>
              <a
                href="https://www.instagram.com/ritualizacosmeticos/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={instagram}
                  alt="Imagem Instagram"
                  className="imgInsta"
                  width={60}
                  height={60}
                />
              </a>
            </div>
            <p className="dadosEmpresa">
              RITUALIZA COMERCIO DE COSMETICOS LTDA
            </p>
            <p className="dadosEmpresa">CNPJ: 43.652.071/0001-81</p>
            <p className="dadosEmpresa">
              Rua Luis Oscar da Carvalho, n 75, Trindade -
            </p>
            <p className="dadosEmpresa">Florianópolis - SC CEP: 88036-400</p>
          </div>

          <div className="divDireita">
            <div className="divDados">
              <div className="nomeEEndereco">
                <label htmlFor="nome" className="inputEmail">
                  Nome*
                  <input
                    id="nome"
                    required
                    type="text"
                    className="inputs"
                    placeholder="Insira seu nome"
                    value={dadosContato.nome}
                    onChange={({target}) =>
                      setDadosContato({...dadosContato, nome: target.value})
                    }
                  />
                </label>

                {/* <Input
                  className="focus:border-contrast/20"
                  //   className={
                  //     isHome
                  //       ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                  //       : 'focus:border-primary/20'
                  //   }
                  type="search"
                  variant="minisearch"
                  placeholder="Search"
                  name="q"
                /> */}

                <label htmlFor="endereco" className="inputEmail">
                  Endereço
                  <input
                    id="endereco"
                    type="text"
                    className="inputs"
                    placeholder="Insira seu endereço"
                    value={dadosContato.endereco}
                    onChange={({target}) =>
                      setDadosContato({...dadosContato, endereco: target.value})
                    }
                  />
                </label>
              </div>

              <div className="emailETelefone">
                <label htmlFor="email" className="inputEmail">
                  Email*
                  <input
                    id="email"
                    required
                    type="email"
                    className="inputs"
                    placeholder="Insira seu email"
                    value={dadosContato.email}
                    onChange={({target}) =>
                      setDadosContato({...dadosContato, email: target.value})
                    }
                  />
                </label>

                <label htmlFor="telefone" className="inputtelefone">
                  Telefone
                  <input
                    id="telefone"
                    type="tel"
                    className="inputs"
                    placeholder="Insira seu telefone"
                    value={dadosContato.telefone}
                    onChange={({target}) =>
                      setDadosContato({...dadosContato, telefone: target.value})
                    }
                  />
                </label>
              </div>

              <div className="divAssunto">
                <label htmlFor="assunto" className="inputassunto">
                  Assunto
                  <input
                    id="assunto"
                    type="text"
                    className="inputs"
                    placeholder="Insira o assunto"
                    value={dadosContato.assunto}
                    onChange={({target}) =>
                      setDadosContato({...dadosContato, assunto: target.value})
                    }
                  />
                </label>
              </div>

              <div className="areaMensagem">
                <label htmlFor="mensagem" className="areaMensaagem">
                  Mensagem
                  <textarea
                    id="mensagem"
                    type="text"
                    className="inputs"
                    placeholder="Digite sua mensagem aqui"
                    value={dadosContato.mensagem}
                    onChange={({target}) =>
                      setDadosContato({...dadosContato, mensagem: target.value})
                    }
                  />
                </label>
              </div>
            </div>

            <button className="button-contato" type="submit">
              Enviar
            </button>

            {/* <Link href={`/`}><a className={Styles.seeMore}>Voltar a Loja</a></Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contato;
