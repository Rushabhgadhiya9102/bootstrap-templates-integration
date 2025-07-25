import React from "react";

const CallToAction = () => {
  return (
    <>
      <section
        id="call-to-action"
        className="call-to-action section accent-background"
      >
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="col-xl-10">
              <div className="text-center">
                <h3>Call To Action</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a className="cta-btn" href="#">
                  Call To Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
