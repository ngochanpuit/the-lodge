import Breadcrumb from '@/components/Breadcrum';
import Admin from '@/layout/Admin';
import { TranslationContext } from '@/contexts/translation.context';
import { useContext, useState } from 'react';
import Head from 'next/head';
import Menu from '@/utils';
export default function MenuPage() {
  const [openTab, setOpenTab] = useState(1);
  const { t } = useContext(TranslationContext);
  const breadcrumbItems = [
    { href: '/', label: t('home') },
    { href: '', label: t('coffee') },
    { href: '', label: t('menu') },
  ];
  const { menuTitle, favoriteItems, coffeeItems, teaItems, cakeItems } = Menu();
  const menuItems = [favoriteItems, coffeeItems, teaItems, cakeItems];

  return (
    <Admin>
      <Head>
        <title>{t('menu')}</title>
      </Head>
      <Breadcrumb items={breadcrumbItems} />

      <div className="menu">
        <div className="w-full p-3">
          <ul className="menu-title-wrap" role="tablist">
            {menuTitle.map((item) => (
              <li className="menu_title" key={item.id}>
                <a
                  className={`menu_item text-lg md:text-xl ${
                    openTab === item.id + 1 ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(item.id + 1);
                  }}
                  data-toggle="tab"
                  href={`#link${item.id + 1}`}
                  role="tablist"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content active show" id="tab-1">
            {menuTitle.map((title) => (
              <div className={openTab === title.id + 1 ? 'block' : 'hidden'} id="link1">
                {menuItems[title.id]?.map((item) => (
                  <div className="item-wrapper" key={item.id}>
                    <div
                      className="item_img w-full md:w-2/5 "
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <img src={item.img} alt="" className="img-fluid bg-white" />
                    </div>
                    <div className="item_description w-full md:w-3/5">
                      <div className="my-6 md:mb-3 md:mt-0 text-xl md:text-2xl flex justify-between">
                        <h3>{item.name}</h3>
                        <span className="item-price">{item.price} VNĐ</span>
                      </div>
                      <p className="fst-italic">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Admin>
  );
}
