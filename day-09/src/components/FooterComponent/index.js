import "bootstrap/dist/css/bootstrap.css";
import SectionLinkComponent from "./SectionLinkComponent/index";
import ListIconComponent from "./ListIconComponent";

const FooterComponent = ({ currentAccount }) => {
  return (
    <footer
      class="text-center text-lg-start text-white"
      style={{ backgroundColor: "#3e4551" }}
    >
      <div class="container p-4 pb-0">
        <section class="">
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">FOOTER CONTENT</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis
                obcaecati. Ducimus, quas. Corrupti, pariatur eaque? Reiciendis
                assumenda iusto sapiente inventore animi?
              </p>
            </div>

            <SectionLinkComponent />
          </div>
        </section>

        <hr class="mb-4" />

        {currentAccount === null && (
          <section class="">
            <p class="d-flex justify-content-center align-items-center">
              <span class="me-3">Register for free</span>
              <button type="button" class="btn btn-outline-light btn-rounded">
                Sign up!
              </button>
            </p>
          </section>
        )}

        <hr class="mb-4" />

        <section class="mb-4 text-center">
          <ListIconComponent />
        </section>
      </div>

      <div class="text-center p-3" style={{ backgroundColor: "#3e4551" }}>
        © 2020 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
