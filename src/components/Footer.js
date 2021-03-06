const Unauthorized = () => {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div>
        {/* Footer */}
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#1c2331" }}
        >
          {/* Section: Social media */}
          <section
            className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "black" }}
          >
            {/* Left */}
            <div className="me-5">
              <span className="yellowText">Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div >
              <a href="" className="text-white me-4 px-2" >
                <i className="fa fa-facebook-f" style={{ color: "#f1e1ab" }}/>
              </a>
              <a href="" className="text-white me-4 px-2">
                <i className="fa fa-twitter" style={{ color: "#f1e1ab" }}/>
              </a>
              <a href="" className="text-white me-4 px-2">
                <i className="fa fa-google" style={{ color: "#f1e1ab" }}/>
              </a>
              <a href="" className="text-white me-4 px-2">
                <i className="fa fa-instagram" style={{ color: "#f1e1ab" }}/>
              </a>
              <a href="" className="text-white me-4 px-2">
                <i className="fa fa-linkedin" style={{ color: "#f1e1ab" }}/>
              </a>
              <a href="" className="text-white me-4 px-2">
                <i className="fa fa-github" style={{ color: "#f1e1ab" }}/>
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">Game World!</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    Welcome to our page!Please feal free to contact us about
                    anything and we will do our best to give u a response as
                    soon as possible!
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      Lorem, ipsum dolor.
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Lorem, ipsum dolor.
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Lorem, ipsum dolor.
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Bootstrap Angular
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Help
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <i className="fa fa-home mr-3" /> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fa fa-envelope mr-3" /> info@example.com
                  </p>
                  <p>
                    <i className="fa fa-phone mr-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fa fa-print mr-3" /> + 01 234 567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            ?? 2022 Copyright:
            <a className="text-white">GameWorld.com</a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
      {/* End of .container */}
    </>
  );
};

export default Unauthorized;
