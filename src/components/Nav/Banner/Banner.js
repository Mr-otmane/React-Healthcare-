import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2>Contact Us</h2>
            <li>
              <Link to="/home">
                <FontAwesomeIcon icon={faHome} /> home
              </Link>
              / contact us
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
