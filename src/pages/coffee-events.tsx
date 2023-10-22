import Breadcrumb from '@/components/Breadcrum';
import Admin from '@/components/layout/Admin';
import { TranslationContext } from '@/contexts/translation.context';
import Head from 'next/head';
import { useContext } from 'react';

export default function Events() {
  const { t } = useContext(TranslationContext);

  const breadcrumbItems = [
    { href: '/', label: t('home') },
    { href: '', label: t('coffee') },
    { href: '', label: t('events') },
  ];
  return (
    <Admin>
      <Head>
        <title>{t('events')}</title>
      </Head>
      <Breadcrumb items={breadcrumbItems} />
      <div className="events-wrap">
        <section id="events" className="events !pt-6">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <p>{t('events')}</p>
            </div>

            <div className="events-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img src="images/acoustic.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Acoustic</h3>
                      <div className="price">
                        <p>
                          <a href="#events-form">
                            <span>
                              <i>{t('booking')}</i>
                            </span>
                          </a>
                        </p>
                      </div>
                      <p className="fst-italic">
                        Kopi Kount's Coffee Cart brings caffeine and convenience to any event –
                        weddings, corporate functions, and more.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex
                          ea commodo consequat.
                        </li>
                        <li>
                          <i className="bi bi-check-circled"></i> Duis aute irure dolor in
                          reprehenderit in voluptate velit.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="events-form" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <p>{t('booking')}</p>
            </div>
          </div>

          <div className="container" data-aos="fade-up">
            <div className="row justify-center">
              <div className="col-lg-8 mt-lg-0">
                <form action="event-forms.php" method="post" role="form" className="php-email-form">
                  <div className="form-group mt-3">
                    <label htmlFor="phone">{t('fullName')}</label>
                    <input type="text" className="form-control" name="name" id="name" required />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="phone">{t('phoneNumber')}</label>
                    <input type="phone" className="form-control" name="phone" id="phone" required />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="event-date">{t('date')}</label>
                    <input
                      type="date"
                      name="event-date"
                      className="form-control"
                      id="event-date"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="start-time">{t('startTime')}</label>
                    <input
                      type="time"
                      name="start-time"
                      className="form-control"
                      id="start-time"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="num-people">{t('numOfPeople')}</label>
                    <input
                      type="number"
                      className="form-control"
                      name="num-people"
                      id="num-people"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="message">{t('addInfo')}</label>
                    <textarea className="form-control" name="message"></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center">
                    <button type="submit">{t('sendInfo')}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Admin>
  );
}
