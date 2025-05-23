import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ----- images -----

import Testimonial1 from '../assets/img/testimonials/testimonials-1.jpg';
import Testimonial2 from '../assets/img/testimonials/testimonials-2.jpg';
import Testimonial3 from '../assets/img/testimonials/testimonials-3.jpg';
import Testimonial4 from '../assets/img/testimonials/testimonials-4.jpg';
import Testimonial5 from '../assets/img/testimonials/testimonials-5.jpg';

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam,
                  ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                  risus at semper.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
              <img src={Testimonial1} className="testimonial-img" alt="Saul Goodman" />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid malis quorum velit fore eram velit
                  sunt aliqua noster fugiat irure amet legam anim culpa.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
              <img src={Testimonial2} className="testimonial-img" alt="Sara Wilsson" />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Enim nisi quem export duis labore cillum quae magna enim
                  sint quorum nulla quem veniam duis minim tempor labore
                  quem eram duis noster aute amet eram fore quis sint minim.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
              <img src={Testimonial3} className="testimonial-img" alt="Jena Karlis" />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat dolor enim duis veniam ipsum
                  anim magna sunt elit fore quem dolore labore illum veniam.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
              <img src={Testimonial4} className="testimonial-img" alt="Matt Brandon" />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Quis quorum aliqua sint quem legam fore sunt eram irure
                  aliqua veniam tempor noster veniam sunt culpa nulla illum
                  cillum fugiat legam esse veniam culpa fore nisi cillum
                  quid.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
              <img src={Testimonial5} className="testimonial-img" alt="John Larson" />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
