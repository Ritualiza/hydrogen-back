// import styles from './Startquiz.css';

const Startquiz = ({setStage}) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="flex justify-center items-center text-[24px] mb-0 leading-[1.15]">
        Bem-vinda(o) ao futuro do skincare!
      </h2>
      <h2 className="flex justify-center items-center text-[24px] mb-0 leading-[1.15]">
        Estamos animadas para conhecer você e a sua pele.{' '}
      </h2>
      <p className="flex justify-center items-center text-center text-[18px]">
        {' '}
        Responda e descubra o melhor Ritual personalizado para as suas
        necessidades!{' '}
      </p>
      <button onClick={() => setStage('form')} className="button">
        Personalizar meu Ritual
      </button>
    </div>
  );
};

export default Startquiz;
