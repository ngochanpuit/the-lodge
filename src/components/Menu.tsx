import { TranslationContext } from '@/contexts/translation.context';
import { useContext } from 'react';

export const Menu = () => {
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
  const favoriteItems = [
    {
      id: 1,
      name: t('cafeRg'),
      price: '15.000',
      description:
        'Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt, phảng phất mùi cacao và cái đắng mượt mà trôi tuột xuống vòm họng.',
      img: '/images/denda.jpg',
    },
  ];
  const coffeeItems = [
    {
      id: 1,
      name: t('cafeRg'),
      price: '15.000',
      description:
        'Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.',
      img: '/images/denda.jpg',
    },
    {
      id: 2,
      name: t('cafeSg'),
      price: '15.000',
      description:
        'Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.',
      img: '/images/denda.jpg',
    },
    {
      id: 3,
      name: t('milkCoffee'),
      price: '25.000',
      description:
        'Cà phê sữa đá pha theo phong cách Việt Nam gồm cà phê rang xay được pha phin hay pha sẵn với sữa đặc có đường (thông dụng là sữa Ông Thọ) theo tỷ lệ một phần nước cà phê, 1 hoặc hai phần sữa tùy theo khẩu vị của người uống.',
      img: '/images/caphesua.jpg',
    },
    {
      id: 4,
      name: t('whiteCoffee'),
      price: '25.000',
      description:
        'Cà phê sữa đá pha theo phong cách Việt Nam gồm cà phê rang xay được pha phin hay pha sẵn với sữa đặc có đường (thông dụng là sữa Ông Thọ) theo tỷ lệ một phần nước cà phê, 1 hoặc hai phần sữa tùy theo khẩu vị của người uống.',
      img: '/images/bac-xiu.jpg',
    },
    {
      id: 5,
      name: 'Cafe muối',
      price: '25.000',
      description:
        'Cà phê sữa đá pha theo phong cách Việt Nam gồm cà phê rang xay được pha phin hay pha sẵn với sữa đặc có đường (thông dụng là sữa Ông Thọ) theo tỷ lệ một phần nước cà phê, 1 hoặc hai phần sữa tùy theo khẩu vị của người uống.',
      img: '/images/cf-muoi.jpg',
    },
    {
      id: 6,
      name: 'Cafe trứng',
      price: '25.000',
      description:
        'Cà phê trứng là một loại thức uống có nguồn gốc từ Việt Nam được làm từ cà phê với trứng gà và sữa đặc có đường.',
      img: '/images/cf-trung.jpg',
    },
    {
      id: 7,
      name: 'Sữa tươi sương sáo',
      price: '25.000',
      description:
        'Cà phê sữa đá pha theo phong cách Việt Nam gồm cà phê rang xay được pha phin hay pha sẵn với sữa đặc có đường (thông dụng là sữa Ông Thọ) theo tỷ lệ một phần nước cà phê, 1 hoặc hai phần sữa tùy theo khẩu vị của người uống.',
      img: '/images/suoi-tuoi-suong-sao.png',
    },
  ];

  const teaItems = [
    {
      id: 1,
      name: 'Trà táo dứa',
      price: '25.000',
      description: 'Trà táo dứa tự nhiên và bổ dưỡng.',
      img: '/images/tra-tao-dua.jpg',
    },
    {
      id: 2,
      name: 'Trà nhãn sả',
      price: '25.000',
      description: 'Trà nhãn sả tự nhiên và bổ dưỡng.',
      img: '/images/tra-nhan-sa.jpg',
    },
    {
      id: 3,
      name: 'Trà hoa anh đào',
      price: '25.000',
      description: 'Trà nhãn sả tự nhiên và bổ dưỡng.',
      img: '/images/tra-hoa-anh-dao.jpg',
    },
    {
      id: 4,
      name: 'Trà dâu dứa',
      price: '25.000',
      description: 'Trà nhãn sả tự nhiên và bổ dưỡng.',
      img: '/images/tra-dau-dua.jpg',
    },
    {
      id: 5,
      name: 'Trà dưa hấu bạc hà',
      price: '25.000',
      description: 'Trà nhãn sả tự nhiên và bổ dưỡng.',
      img: '/images/tra-dua-hau-bac-ha.jpg',
    },
    {
      id: 6,
      name: 'Trà dứa tắc',
      price: '25.000',
      description: 'Trà nhãn sả tự nhiên và bổ dưỡng.',
      img: '/images/tra-dua-tac.jpg',
    },
    {
      id: 7,
      name: 'Trà cam táo mật ong',
      price: '25.000',
      description: 'Trà nhãn sả tự nhiên và bổ dưỡng.',
      img: '/images/tra-cam-tao-mat-ong.jpg',
    },
  ];

  const cakeItems = [
    {
      id: 1,
      name: 'Khoai tây chiên và sốt nấm truffle',
      price: '40.000',
      description: 'Bánh mì ngọt vị sô cô la ngon tuyệt.',
      img: '/images/fries.jpg',
    },
  ];
  return { menuTitle, favoriteItems, coffeeItems, teaItems, cakeItems };
};

export default Menu;
