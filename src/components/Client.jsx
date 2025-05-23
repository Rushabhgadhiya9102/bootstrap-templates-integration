import React from "react";
import clients1 from '../assets/img/clients/client-1.png'
import clients2 from '../assets/img/clients/client-2.png'
import clients3 from '../assets/img/clients/client-3.png'
import clients4 from '../assets/img/clients/client-4.png'
import clients5 from '../assets/img/clients/client-5.png'
import clients6 from '../assets/img/clients/client-6.png'

const Client = () => {
  return (
    <>
      <section id="clients" className="clients section light-background">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={clients1}
                className="img-fluid"
                alt
              />
            </div>
            {/* End Client Item */}
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={clients2}
                className="img-fluid"
                alt
              />
            </div>
            {/* End Client Item */}
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={clients3}
                className="img-fluid"
                alt
              />
            </div>
            {/* End Client Item */}
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={clients4}
                className="img-fluid"
                alt
              />
            </div>
            {/* End Client Item */}
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={clients5}
                className="img-fluid"
                alt
              />
            </div>
            {/* End Client Item */}
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src={clients6}
                className="img-fluid"
                alt
              />
            </div>
            {/* End Client Item */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
