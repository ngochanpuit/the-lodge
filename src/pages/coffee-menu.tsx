import Admin from '@/components/layout/Admin';
import { TranslationContext } from '@/contexts/translation.context';
import { useContext, useState } from 'react';

export default function MenuPage() {
  const [openTab, setOpenTab] = useState(1);
  const { t } = useContext(TranslationContext);
  const menuTitle = [
    {
      title: t('favorite'),
    },
    {
      title: 'Cafe',
    },
    {
      title: t('tea'),
    },
    {
      title: t('cake'),
    },
  ];
  const menuItem = [
    {
      name: t('coffee'),
      price: '50.000',
      description:
        'Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.',
      img: '/images/denda.jpg',
    },
    {
      name: t('milkCoffee'),
      price: '25.000',
      description:
        'Cà phê Đắk Lắk nguyên chất được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị',
      img: '/images/caphesua.jpg',
    },
  ];
  return (
    <Admin>
      <div className="menu">
        <div className="w-full p-2">
          <ul className="menu-title-wrap" role="tablist">
            {menuTitle.map((item, index) => (
              <li className="menu_title" key={index}>
                <a
                  className={`menu_item text-lg md:text-xl ${
                    openTab === index + 1 ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index + 1);
                  }}
                  data-toggle="tab"
                  href={`#link${index + 1}`}
                  role="tablist"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content active show" id="tab-1">
            {menuTitle.map((_, index) => (
              <div className={openTab === index + 1 ? 'block' : 'hidden'} id="link1">
                {menuItem.map((item) => (
                  <div className="item-wrapper">
                    <div className="item_img md:w-2/5 " data-aos="zoom-in" data-aos-delay="100">
                      <img src={item.img} alt="" className="img-fluid" />
                    </div>
                    <div className="item_description md:w-3/5">
                      <div className="my-6 md:mb-3 md:mt-0 text-xl md:text-2xl flex justify-between">
                        <h3>{item.name}</h3>
                        <span>{item.price} VNĐ</span>
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
