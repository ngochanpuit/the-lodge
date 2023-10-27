import Breadcrumb from '@/components/Breadcrum';
import Admin from '@/layout/Admin';
import { TranslationContext } from '@/contexts/translation.context';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Head from 'next/head';

export default function CoffeeBlog() {
  const { t } = useContext(TranslationContext);
  const [currentImg, setCurrentImg] = useState(0);

  const breadcrumbItems = [
    { href: '/', label: t('home') },
    { href: '', label: t('coffee') },
    { href: '', label: t('blog') },
  ];

  const imgList = [
    { id: 1, url: 'images/cs2.jpg' },
    { id: 2, url: 'images/cs3.jpg' },
  ];

  const handleSwipe = (direction: any) => {
    if (direction.dir === 'Left') {
      setCurrentImg((currentImg + 1) % imgList.length);
    } else if (direction.dir === 'Right') {
      setCurrentImg((currentImg - 1 + imgList.length) % imgList.length);
    }
  };
  const nextImg = () => {
    setCurrentImg((currentImg + 1) % imgList.length);
  };

  const prevImg = () => {
    setCurrentImg((currentImg - 1 + imgList.length) % imgList.length);
  };
  const handlers = useSwipeable({
    onSwiped: (eventData) => handleSwipe(eventData),
  });
  return (
    <Admin>
      <Head>
        <title>{t('blog')}</title>
      </Head>
      <Breadcrumb items={breadcrumbItems} />

      {/* <div className="blog-wrap">
        <div className="blog-user">
          <img className="blog-user-avatar" src="images/cs3.jpg"></img>
          <a className="blog-user-name" href="#">
            Ngoc Han
          </a>
          <div className="blog-user-time">20/10/2023</div>
        </div>

        <div className="blog-location">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="blog-location-name">
            Lô F9 - 84 đường 3/2, P. Vĩnh Lạc, Rạch Giá - Kiên Giang {`(Kế lẩu dê Đức Tài)`}
          </span>
        </div>

        <div className="blog-caption">
          <span>
            💐【Đêm nhạc】TRAO GỬI YÊU THƯƠNG Cả nhà đã biết tin gì chưa? Nhằm tri ân một nửa thế
            giới, The Lodge Cafe Acoustic chiêu đãi một đêm nhạc ấm cúng trong khung giờ 20h-22h với
            nhiều ưu đãi hấp dẫn. 20/10 đã cận kề nhưng bạn vẫn chưa biết đi đâu, thì đừng bỏ lỡ
            nhé!
          </span>
        </div>

        <div key={imgList[currentImg].id} {...handlers} className="blog-image-wrap ">
          <img className="blog-image rounded" src={imgList[currentImg].url} alt="" />
          <button type="button" onClick={prevImg} className="blog-control prev">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button type="button" onClick={nextImg} className="blog-control next">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <p className="blog__tab--count-image"></p>

        <div className="gallery">
          <div className="gallery-inner">
            <img className="gallery-img " src="images/cs1.jfif" alt="" />
          </div>

          <div className="gallery-control close">
            <i className="fa-solid fa-xmark"></i>
          </div>

          <div className="gallery-control left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>

          <div className="gallery-control right">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className="comment">
          <div className="comment-action">
            <p className="comment-action--like">
              <FontAwesomeIcon className="comment-action-icon" icon={faHeart} />
            </p>
            <p className="comment-action--comment">
              <FontAwesomeIcon className="comment-action-icon" icon={faComment} />
            </p>
            <p className="comment-action--save">
              <FontAwesomeIcon className="comment-action-icon" icon={faBookBookmark} />
            </p>
          </div>

          <div className="comment-like-count">
            <h4>Ngoc Han và 200 người khác đã thích</h4>
          </div>

          <input
            className="comment--add"
            type="text"
            name="comment"
            id=""
            placeholder="Thêm bình luận..."
          />

          <div className="comment-wrap media p-3">
            <img src="./model/images/avt.jpg" alt="John Doe" className="mr-3 mt-2 rounded-circle" />
            <div className="media-body">
              <h4>
                Ngọc Hân{' '}
                <small>
                  <i>bình luận lúc 03/10 22:30</i>
                </small>
              </h4>
              <p>Xinh đẹp tuyệt vời :* </p>
              <div className="media p-3">
                <img
                  src="./model/images/user_avatar.jpg"
                  alt="Jane Doe"
                  className="mr-3 mt-2 rounded-circle"
                />
                <div className="media-body">
                  <h4>
                    Định khùng{' '}
                    <small>
                      <i>bình luận lúc 03/10 23:40</i>
                    </small>
                  </h4>
                  <p>Ờ cám ơn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="spa-wrap">
        <img className="img-banner" src="images/acoustic.jpg" alt="" />
        <div className="spa-content">
          <h1 className="md:text-6xl text-4xl bold text-white">Cooming soon...</h1>
        </div>
      </div>
    </Admin>
  );
}
