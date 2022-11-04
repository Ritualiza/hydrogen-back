import {useEffect, useState} from 'react';
import axios from 'axios';
import CardProductPersonalizado from '../CardProductPersonalizado/CardProductPersonalizado.client';
// import styles from './ProdutoPersonalizado.css';

const ProdutoPersonalizado = ({setStage}) => {
  const [product, setProduct] = useState('');
  // const [shouldSave, setShouldSave] = useState(false);

  const resetLocalStorage = () => {
    localStorage.removeItem('quiz');
    setStage('quiz');
  };

  const getDataFromLocalStorage = async () => {
    const data = JSON.parse(localStorage.getItem('quiz')) || {};
    // console.log(data.historyAnswers);
    const {foundProduct, aceptSave} = data;
    const isAlreadySaved = data.isAlreadySaved || false;
    setProduct(foundProduct || '');
    // setShouldSave(!aceptSave);

    if (!aceptSave) {
      localStorage.removeItem('quiz');
    }
    if (aceptSave && !isAlreadySaved) {
      try {
        // const resp = await fetch('http://localhost:3001/sendQuiz', {
        //   method: 'POST',
        //   body: JSON.stringify(data.historyAnswers),
        // });

        const resp = await axios.post(
          'http://localhost:3001/sendQuiz',
          data.historyAnswers,
        );

        // const dataAPI = await resp.json();
        if (resp.status === 200) {
          localStorage.setItem(
            'quiz',
            JSON.stringify({...data, isAlreadySaved: true}),
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getDataFromLocalStorage();

    // if(!aux){
    // 	setAux(true);

    // }

    // return () => {
    // 	if(!shouldSave){
    // 		localStorage.removeItem('quiz');
    // 	}
    // };
  }, []);

  return (
    <div className={'container bg-[#dec3b6]'}>
      <h2 className={'title text-center'}>
        Estamos felizes em cocriar seu ritual! 😊
      </h2>
      <h2 className={'title text-center'}>
        Abaixo você encontra os principais ativos indicados para sua pele.
      </h2>

      <h1 className="text-center">Meu ritual personalizado</h1>

      <CardProductPersonalizado order={1} />
      <CardProductPersonalizado order={2} />
      <CardProductPersonalizado order={3} />
      <CardProductPersonalizado order={4} />

      <p>Linha {product}</p>
      <button type="button" onClick={resetLocalStorage}>
        Resetar LocalStorage
      </button>
    </div>
  );
};

export default ProdutoPersonalizado;
