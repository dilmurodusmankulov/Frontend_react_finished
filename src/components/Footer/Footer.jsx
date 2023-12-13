import "./Footer.scss";
import abutech from "../../assets/images/footer/abutech.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <ul className="footer__top--list">
            <li>
              <a href="#about">Biz haqimizda</a>
            </li>
            <li>
              <a href="#catalog">Katalog</a>
            </li>
            <li>
              <a href="#stock">Aksiya</a>
            </li>
            <li>
              <a href="#address">Manzilimiz</a>
            </li>
          </ul>
          <ul className="footer__top--icon">
            <li>
              <a href="https://www.facebook.com">
                <i className="uil uil-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="uil uil-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <i className="uil uil-instagram-alt"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@matrasy_luntek">
                <i className="uil uil-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <p>
            &copy 2021 Dream Cloud. Dilmurod tomonidan barcha huquqlar
            himoyalangan.
          </p>
          <img src={abutech} alt="image" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
