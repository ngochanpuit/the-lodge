import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { TranslationContext } from '@/contexts/translation.context';
import { useContext } from 'react';
import GoogleMapComponent from './GoogleMap';
import Link from 'next/link';

export default function Footer() {
  const { t } = useContext(TranslationContext);

  return (
    <footer>
      <GoogleMapComponent />
      <div className="footer_top flex flex-wrap">
        <div className="footer_info_1 w-full md:w-3/5">
          <h2>{t('openHours')}</h2>
          <p className="mb-2">{t('openHoursDay')}</p>
          <p>{t('openHoursTime')} </p>
          <br />
          <h2>{t('address')}</h2>
          <p className="text-center px-4">
            Lô F9 - 84 đường 3/2, P. Vĩnh Lạc,
            {''} <br /> Rạch Giá - Kiên Giang <br />
            {`(Kế lẩu dê Đức Tài)`}
          </p>
        </div>
        <div className="footer_info_2 w-full md:w-2/5">
          <img src="images/coffee_bg.jpg" alt="" />
          <div className="footer_info_2-text pr-9">
            <p>The Lodge - Coffee and Tea</p>
            <br />
            <div>
              <FontAwesomeIcon className="pr-2" icon={faEnvelope} />
              thelodge.rachgia@gmail.com
            </div>
            <br />
            <div>
              <FontAwesomeIcon className="pr-2" icon={faPhone} />
              0794.034.322
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom-brands">
        <ul className="flex">
          <li>
            <Link href="https://www.facebook.com/profile.php?id=61552843432829">
              <FontAwesomeIcon icon={faFacebookSquare} /> The Lodge
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/thelodge.rachgia/">
              <FontAwesomeIcon icon={faInstagramSquare} /> the.lodge
            </Link>
          </li>
          <li>
            <Link href="https://www.tiktok.com/@thelodge.rachgia">
              <FontAwesomeIcon icon={faTiktok} /> thelodgene
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full text-center py-1 bg-gray-400 text-white">
        © 2023 All Rights Reserved By <b>Pu</b>
      </div>
    </footer>
  );
}
