import Head from 'next/head';
import BannerSlider from './BannerSlider';
import { useContext } from 'react';
import { TranslationContext } from '@/contexts/translation.context';

export default function HomePage() {
  const { t } = useContext(TranslationContext);

  return (
    <>
      <Head>
        <title>{t('home')}</title>
      </Head>
      <BannerSlider />

      <div className="px-8 py-14">
        {/* <section className="spcl_section pb-10">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <div className="detail_container">
                  <div className="detail-box">
                    <img src="images/s1.png" alt="" />
                    <h5>Original Coffee</h5>
                    <p>
                      At Sirat Cafe, we take great pride in the quality and originality of our
                      coffee. We source only the finest coffee beans from around the world, and our
                      expert baristas take care to ensure that each cup is brewed to perfection.
                    </p>
                  </div>
                  <div className="detail-box">
                    <img src="images/s2.png" alt="" />
                    <h5>Self Roasted</h5>
                    <p>
                      At Sirat Cafe, we take great pride in our self-roasted coffee. We carefully
                      select the highest quality beans from around the world and expertly roast them
                      in-house to create unique blends perfectly tailored to your tastes. Our
                      self-roasted coffee is not only delicious, but also ethically sourced and
                      sustainable. Come experience the artistry and passion of our coffee roasters
                      today.
                    </p>
                  </div>
                  <div className="detail-box">
                    <img src="images/s3.png" alt="" />
                    <h5>15 Coffee Items</h5>
                    <p>
                      At Sirat Cafe, we offer over 15 types of coffee to choose from, so you can
                      find the perfect blend to suit your tastes. From bold espressos to creamy
                      lattes, our expert baristas are dedicated to creating the perfect cup of
                      coffee for you. Come and explore our variety of coffee options today.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-6 self-center">
                <div className="img-box">
                  <img src="images/coffee.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="!py-0 about_section">
          <div className="container">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/home.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box mt-6 text-center">
                <div className="heading_container">
                  <h2>
                    Grand Opening
                    <br />
                    02/11/2023 🎊
                  </h2>
                </div>
                {/* <p>
                    Sirat Cafe is a welcoming and inclusive coffee shop that blends the best of
                    Islamic culture with the love of coffee. We offer high-quality coffee and
                    delicious halal food options in a warm and welcoming atmosphere. Come and
                    experience the hospitality of Islamic culture at Sirat Cafe.
                  </p> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
