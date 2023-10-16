import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { TranslationContext } from '@/contexts/translation.context';
import { useContext } from 'react';

export default function Footer() {
  const { t } = useContext(TranslationContext);

  return (
    <footer>
      <div className="footer_top flex flex-wrap">
        <div className="footer_info_1 w-full md:w-1/2">
          <h2>{t('address')}</h2>
          <p className="items-center px-4">
            Lô F9 - 84 đường 3/2, P. Vĩnh Lạc,
            {''} <br /> Rạch Giá - Kiên Giang {`(Kế lẩu dê Đức Tài)`}
          </p>
          <br />
          <h2>{t('openHours')}</h2>
          <p>Cafe: 7h - 22h</p>
          <p>Spa: 9h - 22h</p>
        </div>
        <div className="footer_info_2 w-full md:w-1/2">
          <img src="images/coffee_bg.jpg" alt="" />
          <div className="footer_info_2-text pr-9">
            <p>Khách hàng là cha là mẹ</p>
            <br />
            <div>
              <FontAwesomeIcon className="pr-2" icon={faEnvelope} />
              thelodge@gmail.com
            </div>
            <br />
            <div>
              <FontAwesomeIcon className="pr-2" icon={faPhone} />
              079.4034.322
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom-brands">
        <ul className="flex">
          <li>
            <FontAwesomeIcon icon={faFacebookSquare} /> The Lodge
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagramSquare} /> the.lodge
          </li>
          <li>
            <FontAwesomeIcon icon={faTiktok} /> thelodgene
          </li>
        </ul>
      </div>
      <div className="w-full text-center py-1 bg-gray-400 text-white">
        © 2023 All Rights Reserved By Pu
      </div>
    </footer>
  );
}
