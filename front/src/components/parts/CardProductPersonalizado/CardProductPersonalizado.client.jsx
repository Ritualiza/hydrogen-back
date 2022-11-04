import {Image} from '@shopify/hydrogen';

const CardProductPersonalizado = (data) => {
  const {order} = data;
  return (
    <div className="flex m-4 rounded-full">
      <div className="flex flex-col items-center p-4">
        <Image
          src="https://static.wixstatic.com/media/3b7294_9a89df32da9e4c9fadb99c3ba41e554e~mv2.jpg/v1/fill/w_500,h_333,al_c,q_85,usm_0.66_1.00_0.01/3b7294_9a89df32da9e4c9fadb99c3ba41e554e~mv2.webp"
          width={600}
          height={600}
        />
        <h3>GEL DE LIMPEZA EQUILIBRANTE</h3>
        <span className="text-center">R$ 119,90</span>
      </div>
      <div>
        <h3>{`${order}. GEL DE LIMPEZA EQUILIBRANTE`}</h3>
        <div className="flex">
          <Image
            className="m-4 rounded-full"
            src="https://static.wixstatic.com/media/nsplsh_55464756734953505a5f55~mv2_d_7952_5304_s_4_2.jpg/v1/fill/w_108,h_72,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Tobias%20Oetiker.jpg"
            width={100}
            height={200}
          />
          <p>
            <strong>Alpaflor:</strong> prebiótico orgânico multifuncional, atua
            na contenção da oleosidade e dos poros dilatados, deixando a pele
            visivelmente matificada.
          </p>
        </div>
        <div className="flex">
          <Image
            className="m-4 rounded-full"
            src="https://static.wixstatic.com/media/nsplsh_6a6f4f564339642d6a6973~mv2_d_4752_3168_s_4_2.jpg/v1/fill/w_108,h_72,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Tomasz%20Filipek.jpg"
            width={100}
            height={200}
          />
          <p>
            <strong>Isomerato de sacarídeo:</strong> hidratação profunda por 72h
            mesmo em produtos enxaguáveis, efeito calmante e de pele mais lisa.
          </p>
        </div>
        <div className="flex">
          <Image
            className="m-4 rounded-full"
            src="https://static.wixstatic.com/media/3b7294_9b0938b40fe44ebb9f837026019f49a0~mv2.jpg/v1/fill/w_108,h_72,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/_edited.jpg"
            width={100}
            height={200}
          />
          <p>
            <strong>Tensoativos vegetais de coco e babaçu:</strong> livre de
            sulfatos, promove a limpeza suave da pele, protegendo a sua barreira
            natural e também o meio-ambiente, já que é biodegradável!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProductPersonalizado;
