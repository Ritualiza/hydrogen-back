import {useState} from 'react';

import './vale-presente.css';
import imgProduto from '../../../routes/images/vale-presente.webp';
import {Image} from '@shopify/hydrogen';

function ValePresente() {
  // const {fetchAllProducts, products, checkout, addItemToCheckout,removeLineItem} = useContext(AppContext);
  const dataAtual = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1 < 10
      ? '0' + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1
  }-${
    new Date().getDate() < 10
      ? '0' + new Date().getDate()
      : new Date().getDate()
  }`;
  const [value, setValue] = useState(100);
  const [qtd, setQtd] = useState(1);
  const [paraQuem, setParaQuem] = useState('Para outra pessoa');
  const [dadosDestinatario, setDadosDestinatario] = useState({
    nome: '',
    email: '',
    data: dataAtual,
    mensagem: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="main">
      <form className="formInicial" onSubmit={handleSubmit}>
        <div className="divImage">
          <Image
            src={imgProduto}
            alt="Imagem Produto"
            width={500}
            height={500}
          />
        </div>

        <div className="divEsquerda">
          <h1 className="title"> Vale-presente digital </h1>
          <h2 className="value">
            {' '}
            {value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
            })}
          </h2>
          <p className="description">
            {' '}
            Escolha um valor e escreva uma mensagem personalizada para que o
            vale-presente tenha a sua cara.{' '}
          </p>
          <div className="divValue">
            <p className="textoValue">Valor</p>
            <div className="divSpansValue">
              <button
                type="button"
                className="spanValues"
                onClick={() => setValue(100)}
              >
                {' '}
                R$ 100{' '}
              </button>
              <button
                type="button"
                className="spanValues"
                onClick={() => setValue(150)}
              >
                {' '}
                R$ 150{' '}
              </button>
              <button
                type="button"
                className="spanValues"
                onClick={() => setValue(200)}
              >
                {' '}
                R$ 200{' '}
              </button>
              <button
                type="button"
                className="spanValues"
                onClick={() => setValue(250)}
              >
                {' '}
                R$ 250{' '}
              </button>
              <button
                type="button"
                className="spanValues"
                onClick={() => setValue(300)}
              >
                {' '}
                R$ 300{' '}
              </button>
              <button
                type="button"
                className="spanValues"
                onClick={() => setValue(350)}
              >
                {' '}
                R$ 350{' '}
              </button>
            </div>
          </div>

          <div className="divTotalQtd">
            <p className="textoQtd">Quantidade</p>
            <div className="divQtd">
              <button
                type="button"
                className="buttonqtd"
                onClick={() => setQtd(qtd - 1)}
                disabled={qtd === 1}
              >
                {' '}
                -{' '}
              </button>
              <span className="buttonqtd"> {qtd} </span>
              <button
                type="button"
                className="buttonQtd"
                onClick={() => setQtd(qtd + 1)}
              >
                {' '}
                +{' '}
              </button>
            </div>
          </div>

          <div className="totalParaQuem">
            <p className="textoParaQuem">Para quem é o vale-presente?</p>
            <div className="divParaQuem">
              <button
                type="button"
                className="buttonParaQuem"
                onClick={() => setParaQuem('Para outra pessoa')}
              >
                {' '}
                Para outra pessoa{' '}
              </button>
              <button
                type="button"
                className="buttonParaQuem"
                onClick={() => setParaQuem('Para mim')}
              >
                {' '}
                Para mim{' '}
              </button>
            </div>
          </div>

          {paraQuem === 'Para outra pessoa' && (
            <div className="divDadosDestinatario">
              <label htmlFor="email" className="inputEmail">
                Email do destinatário
                <input
                  id="email"
                  type="email"
                  value={dadosDestinatario.email}
                  onChange={({target}) =>
                    setDadosDestinatario({
                      ...dadosDestinatario,
                      email: target.value,
                    })
                  }
                />
              </label>

              <label htmlFor="nome" className="inputEmail">
                Nome do destinatário
                <input
                  id="nome"
                  type="text"
                  value={dadosDestinatario.nome}
                  onChange={({target}) =>
                    setDadosDestinatario({
                      ...dadosDestinatario,
                      nome: target.value,
                    })
                  }
                />
              </label>

              <label htmlFor="email" className="inputData">
                Data de Entrega
                <input
                  id="email"
                  type="date"
                  value={dadosDestinatario.data}
                  onChange={({target}) =>
                    setDadosDestinatario({
                      ...dadosDestinatario,
                      data: target.value,
                    })
                  }
                />
              </label>

              <label htmlFor="mensagem" className="areaMensagem">
                Nome do destinatário
                <textarea
                  id="mensagem"
                  type="text"
                  value={dadosDestinatario.mensagem}
                  onChange={({target}) =>
                    setDadosDestinatario({
                      ...dadosDestinatario,
                      mensagem: target.value,
                    })
                  }
                />
              </label>
            </div>
          )}

          <button className="button" type="submit">
            Comprar
          </button>

          {/* <Link href={`/`}><a className={Styles.seeMore}>Voltar a Loja</a></Link> */}
        </div>
      </form>
    </main>
  );
}

export default ValePresente;
