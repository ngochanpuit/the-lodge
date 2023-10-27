import {
  faBars,
  faChevronDown,
  faChevronRight,
  faLocationDot,
  faPhone,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useContext } from 'react';
import { TranslationContext } from '@/contexts/translation.context';
import Link from 'next/link';

export default function Header() {
  const { t, setLanguage, language } = useContext(TranslationContext);
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as 'en' | 'vi');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoffeeDropdown, setIsCoffeeDropdown] = useState(false);
  const [isSpaDropdown, setIsSpaDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleCoffeeDropdown = () => {
    setIsCoffeeDropdown(!isCoffeeDropdown);
  };

  const toggleSpaDropdown = () => {
    setIsSpaDropdown(!isSpaDropdown);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <div className="header_top">
        <ul>
          <li>
            <FontAwesomeIcon className="pr-2" icon={faLocationDot} />
            Lô F9 - 84 đường 3/2, P. Vĩnh Lạc, Rạch Giá - Kiên Giang
          </li>
          <li>
            <FontAwesomeIcon className="pr-2" icon={faPhone} />
            0794.034.322
          </li>
          <li>
            <Link href={'https://www.facebook.com/groups/282367447884091/members'}>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTiktok} />
          </li>
        </ul>
      </div>
      <div className={`header_bottom  ${isScrolled ? 'header_scroll' : ''}`}>
        <div className="header_bottom_logo w-1/5">
          <img src="images/logo.jpg" alt="" />
        </div>
        <nav className="header_bottom_menu flex-1 w-3/5">
          <ul id="main_menu">
            <li>
              <Link href="/">{t('home')}</Link>
            </li>
            <li className="dropdown">
              <div>Coffee</div>
              <div className="dropdown_item">
                <Link href="/coffee-menu">{t('menu')}</Link>
                <Link href="/coffee-events">{t('events')}</Link>
                <Link href="/coffee-blog">{t('blog')}</Link>
              </div>
            </li>
            <li className="dropdown">
              <div>
                <Link href="/spa">Spa</Link>
              </div>
              {/* <div className="dropdown_item">
                <Link href="">{t('services')}</Link>
                <Link href="">{t('blog')}</Link>
                <Link href="">{t('booking')}</Link>
              </div> */}
            </li>
          </ul>
        </nav>
        <div className="header_bottom_right w-1/5">
          <div>
            <Link href="new-events">Tạo sự kiện</Link>

            <select onChange={handleLanguageChange} value={language}>
              <option value="en">EN</option>
              <option value="vi">VI</option>
            </select>
          </div>
        </div>
        <div className="mobile_menu_button">
          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon className="text-white" icon={faX} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="header_bottom_menu-mobile">
            <ul id="mobile_menu">
              <li>
                <Link href="/">{t('home')}</Link>
              </li>
              <li className="mobile_dropdown">
                <div onClick={toggleCoffeeDropdown}>
                  <span>Coffee</span>
                  {isCoffeeDropdown ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronRight} />
                  )}
                  <div className={`${isCoffeeDropdown ? 'mobile_dropdown_item' : 'hidden'}`}>
                    <Link href="/coffee-menu">{t('menu')}</Link>
                    <Link href="/coffee-events">{t('events')}</Link>
                    <Link href="/coffee-blog">{t('blog')}</Link>
                  </div>
                </div>
              </li>
              <li className="mobile_dropdown">
                <div onClick={toggleSpaDropdown}>
                  <span>
                    {' '}
                    <Link href="/spa">Spa</Link>
                  </span>
                  {/* {isSpaDropdown ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronRight} />
                  )}
                  <div className={`${isSpaDropdown ? 'mobile_dropdown_item' : 'hidden'}`}>
                    <Link href="">{t('services')}</Link>
                    <Link href="">{t('blog')}</Link>
                    <Link href="">{t('booking')}</Link>
                  </div> */}
                </div>
              </li>
              <li>
                <div>
                  <Link href="new-events">Tạo sự kiện</Link>

                  <select onChange={handleLanguageChange} value={language}>
                    <option value="en">EN</option>
                    <option value="vi">VI</option>
                  </select>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
