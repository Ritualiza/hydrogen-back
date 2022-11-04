import {useState} from 'react';
import lupa from '../../../images/lupa.png';

import faq from '../../assets/dataFaq';

import './faq.css';
import {Image} from '@shopify/hydrogen';

// const buttonUp = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path
//       className="arrowUp"
//       d="M8.14644661,14.858836 C7.95118446,14.6635739 7.95118446,14.3469914 8.14644661,14.1517292 L12.4989857,9.79289322 L16.8573469,14.1517292 C17.052609,14.3469914 17.052609,14.6635739 16.8573469,14.858836 C16.6620847,15.0540981 16.3455022,15.0540981 16.1502401,14.858836 L12.4989857,11.2071068 L8.85355339,14.858836 C8.65829124,15.0540981 8.34170876,15.0540981 8.14644661,14.858836 Z"
//     ></path>
//   </svg>
// );

// const buttonDown = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//   >
//     <path
//       className="arrowDown"
//       d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z"
//     ></path>
//   </svg>
// );

function Faq() {
  const [searchClicked, setSearchClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('A Ritualiza');
  const [showAnswer, setShowAnswer] = useState(
    Object.keys(faq[selectedCategory])[0],
  );
  const [inputSearch, setInputSearch] = useState('');

  const showOrNotAnswer = (el) => {
    if (showAnswer !== el.question) {
      setShowAnswer(el.question);
    } else {
      setShowAnswer('');
    }
  };

  return (
    <div className="geral">
      <div className="divGeral">
        {!searchClicked ? (
          <div className="divSuperior">
            <h2>Perguntas frequentes (FAQ)</h2>
            <button type="button" onClick={() => setSearchClicked(true)}>
              <Image src={lupa} width={400} height={400} />
            </button>
          </div>
        ) : (
          <div className="divSuperior">
            <button type="button">
              <Image src={lupa} width={400} height={400} />
            </button>
            <input
              type="text"
              onChange={({target}) => setInputSearch(target.value)}
            />
            <button
              type="button"
              onClick={() => {
                setSearchClicked(false);
                setInputSearch('');
              }}
            >
              x
            </button>
          </div>
        )}
        <ul className="ulHeader">
          {Object.keys(faq).map((el) =>
            selectedCategory === el ? (
              <button
                type="click"
                onClick={() => {
                  setSelectedCategory(el);
                  setShowAnswer(Object.keys(faq[el])[0]);
                }}
              >
                <li key={el} className="selectedCategory">
                  {el}
                </li>
              </button>
            ) : (
              <button
                type="click"
                onClick={() => {
                  setSelectedCategory(el);
                  setShowAnswer(Object.keys(faq[el])[0]);
                }}
              >
                <li key={el}>{el}</li>
              </button>
            ),
          )}
        </ul>

        <select
          className="select"
          onChange={({target}) => {
            setSelectedCategory(target.value);
            setShowAnswer(Object.keys(faq[target.value])[0]);
          }}
        >
          {Object.keys(faq).map((el) => (
            <option key={el}>{el}</option>
          ))}
        </select>

        <div>
          {Object.values(faq[selectedCategory])
            .filter(
              (el) =>
                el.question.toLowerCase().includes(inputSearch.toLowerCase()) ||
                el.answer.toLowerCase().includes(inputSearch.toLowerCase()),
            )
            .map((el) => (
              <div key={el.question} className="divQuestions">
                <button type="button" onClick={() => showOrNotAnswer(el)}>
                  <div>
                    <h2>{el.question}</h2>
                    {/* {showAnswer !== el.question ? buttonUp : buttonDown} */}
                  </div>
                </button>
                {showAnswer === el.question && <p>{el.answer}</p>}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
