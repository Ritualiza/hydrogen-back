import {useEffect, useState} from 'react';
import questions from '../../assets/dataForm';
import './Form.css';

const Form = ({setStage}) => {
  const [atualQuestion, setAtualQuestion] = useState('q1');
  const [dataBeforeandPrevious, setDataBeforeandPrevious] = useState({
    from: '',
    to: '',
  });
  const [foundProduct, setFoundProduct] = useState('');
  const [aceptSave, setAceptSave] = useState(false);

  const [historyAnswers, setHistoryAnswers] = useState({
    q1: {question: 'q1', resp: 'awd', from: '', to: ''},
  });
  // const [historyResps,sethistoryResps] = useState([]);

  const [userAnswer, setUserAnswer] = useState('');
  const [name, setName] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const handleChange = (target, checkbox) => {
    if (checkbox) {
      if (typeof userAnswer === 'string') {
        setUserAnswer([target.value]);
      } else {
        setUserAnswer(
          userAnswer.find((el) => el === target.value)
            ? userAnswer.filter((el) => el !== target.value)
            : [...userAnswer, target.value],
        );
      }
    } else {
      setUserAnswer(target.value);
    }
    validateButton(target.value);
  };

  const validateButton = (value) => {
    if (!value) {
      setDisableButton(true);
    } else if (questions[atualQuestion].pattern) {
      setDisableButton(!questions[atualQuestion].pattern?.test(value));
    } else {
      setDisableButton(false);
    }
  };

  const setNewQuestion = (e) => {
    e.preventDefault();

    if (atualQuestion === 'q1') {
      setName(userAnswer);
    }
    setUserAnswer('');

    if (
      questions[atualQuestion].typeQuestion === 'line' ||
      questions[atualQuestion].typeQuestion === 'checkbox'
    ) {
      setAtualQuestion(questions[atualQuestion].direcionamento);
      setUserAnswer(historyAnswers[dataBeforeandPrevious.to]?.resp || '');

      !historyAnswers[atualQuestion]?.resp
        ? setHistoryAnswers({
            ...historyAnswers,
            [atualQuestion]: {
              question: atualQuestion,
              resp: userAnswer,
              from: dataBeforeandPrevious.from || '',
              to: questions[atualQuestion].direcionamento,
            },
            [questions[atualQuestion].direcionamento]: {
              question: questions[atualQuestion].direcionamento,
              resp: '',
              from: atualQuestion,
              to: '',
            },
          })
        : setHistoryAnswers({
            ...historyAnswers,
            [atualQuestion]: {
              question: atualQuestion,
              resp: userAnswer,
              from: dataBeforeandPrevious.from || '',
              to: questions[atualQuestion].direcionamento,
            },
          });

      setDataBeforeandPrevious({
        from: atualQuestion,
        to: historyAnswers[atualQuestion]?.resp
          ? questions[atualQuestion].direcionamento
          : '',
      });
    } else if (questions[atualQuestion].typeQuestion === 'multiple') {
      if (questions[atualQuestion]?.produto) {
        setFoundProduct(questions[atualQuestion]?.produto[e.target.value]);
        setAceptSave(e.target.value === 'Concordo');
      }
      setAtualQuestion(questions[atualQuestion].direcionamento[e.target.value]);
      setUserAnswer(historyAnswers[dataBeforeandPrevious.to]?.resp || '');

      !historyAnswers[atualQuestion]?.resp
        ? setHistoryAnswers({
            ...historyAnswers,
            [atualQuestion]: {
              question: atualQuestion,
              resp: e.target.value,
              from: dataBeforeandPrevious.from,
              to: questions[atualQuestion].direcionamento[e.target.value],
            },
            [questions[atualQuestion].direcionamento[e.target.value]]: {
              question: questions[atualQuestion].direcionamento[e.target.value],
              resp: '',
              from: atualQuestion,
              to: '',
            },
          })
        : setHistoryAnswers({
            ...historyAnswers,
            [atualQuestion]: {
              question: atualQuestion,
              resp: e.target.value,
              from: dataBeforeandPrevious.from,
              to: questions[atualQuestion].direcionamento[e.target.value],
            },
          });

      setDataBeforeandPrevious({
        from: atualQuestion,
        to: historyAnswers[atualQuestion]?.resp
          ? questions[atualQuestion].direcionamento[e.target.value]
          : '',
      });
    }
    // setDisableButton(true);
    validateButton(userAnswer);
  };

  const passPreviousOrNextQuestion = (direction) => {
    setDataBeforeandPrevious({
      from: historyAnswers[dataBeforeandPrevious[direction]].from,
      to: historyAnswers[dataBeforeandPrevious[direction]].to,
    });
    setAtualQuestion(historyAnswers[dataBeforeandPrevious[direction]].question);
    setUserAnswer(historyAnswers[dataBeforeandPrevious[direction]].resp);
    validateButton(userAnswer);
  };

  const setDataToLocalStorage = () => {
    localStorage.setItem(
      'quiz',
      JSON.stringify({
        atualQuestion,
        dataBeforeandPrevious,
        historyAnswers,
        userAnswer,
        name,
        disableButton,
        foundProduct,
        aceptSave,
      }),
    );
  };

  const getDataFromLocalStorage = () => {
    const {
      atualQuestion,
      dataBeforeandPrevious,
      historyAnswers,
      userAnswer,
      name,
      disableButton,
    } = JSON.parse(localStorage.getItem('quiz')) || {};
    setAtualQuestion(atualQuestion || 'q1');
    setDataBeforeandPrevious(dataBeforeandPrevious || {from: '', to: ''});
    setHistoryAnswers(
      historyAnswers || {q1: {question: 'q1', resp: 'awd', from: '', to: ''}},
    );
    setUserAnswer(userAnswer || '');
    setName(name || '');
    setDisableButton(disableButton || true);
    setFoundProduct(foundProduct || '');
    setAceptSave(aceptSave || false);
    validateButton(userAnswer);
  };

  useEffect(() => {
    if (atualQuestion !== 'q1' && atualQuestion !== 'produto') {
      setDataToLocalStorage();
    }

    validateButton(userAnswer);

    if (atualQuestion === 'produto') {
      if (foundProduct !== '') {
        setDataToLocalStorage();
      }
      //   setProduct(foundProduct);
      setStage('produto');
    }
  }, [atualQuestion]);

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  return (
    <>
      <form
        onSubmit={setNewQuestion}
        className="flex flex-col justify-center items-center"
      >
        {questions[atualQuestion]?.typeQuestion === 'line' && (
          <div className="flex flex-col items-center w-[650px]">
            {atualQuestion !== 'q2' && (
              <h3 className="flex text-center justify-center items-center">
                {questions[atualQuestion].question}
              </h3>
            )}
            {atualQuestion === 'q2' && (
              <h3 className="flex text-center justify-center items-center">{`Olá ${name}, prazer em te conhecer! Qual seu e-mail?`}</h3>
            )}
            <p className="flex text-center justify-center items-center text-[18px]">
              {questions[atualQuestion].adicional}
            </p>
            <label htmlFor="question">
              <input
                className="bg-[transparent]  border-[#9b6448] w-max"
                id="question"
                type="text"
                onChange={({target}) => handleChange(target)}
                value={userAnswer}
                autoComplete="off"
              />
            </label>
            <button
              className="button"
              disabled={
                questions[atualQuestion]?.pattern ? disableButton : false
              }
            >
              Próxima
            </button>
          </div>
        )}

        {questions[atualQuestion]?.typeQuestion === 'multiple' && (
          <div className="div-multiple flex flex-col items-center w-[650px]">
            <h3 className="question flex text-center justify-center items-center">
              {questions[atualQuestion].question}
            </h3>
            <p className="complemento flex text-center justify-center items-center text-[18px]">
              {questions[atualQuestion].adicional}
            </p>

            <div className="div-multiple flex flex-col items-center w-[650px]">
              {questions[atualQuestion].options.map((el) => (
                <div
                  className="div-label-multiple flex justify-center items-center w-max text-[16px] p-[2px]"
                  key={el}
                >
                  <input
                    className="radioButton"
                    name={questions[atualQuestion].question}
                    value={el}
                    onChange={(e) => setNewQuestion(e)}
                    id={el}
                    type="radio"
                    autoComplete="off"
                    checked={el === userAnswer}
                  />

                  <label htmlFor={el} key={el} className="label-multiple">
                    {el}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {questions[atualQuestion]?.typeQuestion === 'checkbox' && (
          <div className="div-multiple">
            <h3 className="question flex text-center justify-center items-center">
              {questions[atualQuestion].question}
            </h3>
            <p className="complemento flex text-center justify-center items-center text-[18px]">
              {questions[atualQuestion].adicional}
            </p>

            <div className="div-multiple">
              {questions[atualQuestion].options.map((el) => (
                <div className="div-label-multiple" key={el}>
                  <input
                    className="input-checkbox"
                    name={el}
                    value={el}
                    checked={
                      typeof userAnswer !== 'string'
                        ? userAnswer?.find((item) => item === el)
                        : false
                    }
                    onChange={({target}) => handleChange(target, true)}
                    id={el}
                    type="checkBox"
                    autoComplete="off"
                  />
                  <label htmlFor={el} className="label-checkbox">
                    {el}
                  </label>
                </div>
              ))}
            </div>

            <button
              className={'button'}
              disabled={
                questions[atualQuestion]?.qtdSelect === userAnswer.length ||
                !questions[atualQuestion]?.qtdSelect
                  ? false
                  : true
              }
            >
              Continuar
            </button>
          </div>
        )}

        <div>
          <button
            type="button"
            onClick={() => passPreviousOrNextQuestion('to')}
            disabled={dataBeforeandPrevious.to === ''}
            className="button-to"
          >
            ↓
          </button>
          <button
            type="button"
            onClick={() => passPreviousOrNextQuestion('from')}
            disabled={atualQuestion === 'q1'}
            className="button-from"
          >
            ↑
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
