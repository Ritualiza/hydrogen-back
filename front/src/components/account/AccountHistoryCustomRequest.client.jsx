import {useEffect, useState} from 'react';
import questions from '../../components/assets/dataForm';

const HistoryCustomRequest = () => {
  const [customRequests, setCustomRequests] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    const a = {};

    Object.values(answers)
      .filter((el) => el.question !== 'produto')
      .forEach((el) => {
        a[questions[el.question].question] = el.resp;
      });

    setCustomRequests([a]);
  };
  return (
    customRequests.length !== 0 && (
      <div>
        {customRequests.map((el, i) => (
          <div key={el}>
            <p>{`${i + 1} vez`}</p>
            {Object.keys(el).map((item) => (
              <div key={item}>
                <h2>{item}</h2>
                {typeof el[item] !== 'object' ? (
                  <p>{el[item]}</p>
                ) : (
                  <ul>
                    {el[item].map((obj) => (
                      <li key={obj}>{obj}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  );
};

export default HistoryCustomRequest;

const answers = {
  q1: {
    question: 'q1',
    resp: 'awdawd',
    from: '',
    to: 'q2',
  },
  q2: {
    question: 'q2',
    resp: 'awda@awd.sw',
    from: 'q1',
    to: 'q3',
  },
  q3: {
    question: 'q3',
    resp: 'Homem',
    from: 'q2',
    to: 'q4',
  },
  q4: {
    question: 'q4',
    resp: 'a) Menor de 18 anos.',
    from: 'q3',
    to: 'q5',
  },
  q5: {
    question: 'q5',
    resp: 'c) Pele mista.',
    from: 'q4',
    to: 'q6',
  },
  q6: {
    question: 'q6',
    resp: 'Tenho acne cerca de uma a duas vezes por mês',
    from: 'q5',
    to: 'q7',
  },
  q7: {
    question: 'q7',
    resp: 'b) Melasma',
    from: 'q6',
    to: 'q69',
  },
  q69: {
    question: 'q69',
    resp: 'Não é sensível, nunca notei sensibilidade durante o uso de produtos cosméticos.',
    from: 'q7',
    to: 'q82',
  },
  q82: {
    question: 'q82',
    resp: [
      'Minha pele me parece tão firme quanto sempre foi.',
      'Minha pele já não está tão firme quanto costumava ser.',
    ],
    from: 'q69',
    to: 'q83',
  },
  q83: {
    question: 'q83',
    resp: 'Não',
    from: 'q82',
    to: 'q84',
  },
  q84: {
    question: 'q84',
    resp: '3 - Pele morena clara: queima (moderadamente), bronzeia (moderadamente), sensibilidade normal ao sol.',
    from: 'q83',
    to: 'q85',
  },
  q85: {
    question: 'q85',
    resp: [
      'Acabo enfrentando muito estresse no meu dia a dia. ',
      'Minha vida é estressante, mas sob controle. ',
      'Não tenho uma alimentação saudável. ',
    ],
    from: 'q84',
    to: 'q86',
  },
  q86: {
    question: 'q86',
    resp: [
      'b) Uniformizar o tom de pele.',
      'e) Reduzir a oleosidade.',
      'h) Estou feliz com a minha pele do jeito que está, quero apenas manter.',
    ],
    from: 'q85',
    to: 'q87',
  },
  q87: {
    question: 'q87',
    resp: 'Gostei dos óleos essenciais de capim limão e melaleuca, quero manter. ',
    from: 'q86',
    to: 'q88',
  },
  q88: {
    question: 'q88',
    resp: '',
    from: 'q87',
    to: 'q89',
  },
  q89: {
    question: 'q89',
    resp: 'Concordo',
    from: 'q88',
    to: 'produto',
  },
  produto: {
    question: 'produto',
    resp: '',
    from: 'q89',
    to: '',
  },
};
