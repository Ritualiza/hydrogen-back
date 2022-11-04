import {useState} from 'react';
// import Styles from '../../../components/parts/form/Form.css';
import ProdutoPersonalizado from '../../parts/produtoPersonalizado/ProdutoPersonalizado.client';
import Startquiz from '../../parts/startQuiz/Startquiz.client';
import Form from '../../parts/form/Form.client';

function Quiz() {
  const [stage, setStage] = useState('quiz');
  //   const [product, setProduct] = useState('');
  const [aux, setAux] = useState(false);

  return (
    <div className="geral  bg-[#dec3b6] text-[#9b6448] m-auto align-middle justify-center items-center font-['EB Garamond, sans-serif'] p-10 overflow-y-scroll h-screen">
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Quiz" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Quiz</title>
      </head>
      {stage === 'quiz' && <Startquiz setStage={setStage} />}
      {stage === 'form' && <Form setStage={setStage} />}
      {stage === 'produto' && (
        <ProdutoPersonalizado
          setStage={setStage}
          stage={stage}
          aux={aux}
          setAux={setAux}
        />
      )}
    </div>
  );
}

export default Quiz;
