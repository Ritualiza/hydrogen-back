import './WhatsappButton.css';
import whatsapp from '../../../images/whatsapp.webp';
import {Image} from '@shopify/hydrogen';

const WhatsappButton = () => {
  //   const sendMessage = () => {};
  return (
    <div className="divWhatsapp">
      <a href="https://api.whatsapp.com/send?phone=55554896077930">
        <Image
          width={50}
          height={50}
          hei
          src={whatsapp}
          alt="whatsapp-button"
        />
      </a>
    </div>
  );
};

export default WhatsappButton;
