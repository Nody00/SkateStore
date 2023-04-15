import styles from "./Footer.module.css";
import { FaTruckMonster } from "react-icons/fa";
import {
  IoArrowForward,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <div className={styles.footer2}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.logoSection}>
              <p className={styles.logoTextBig}>Stay updated</p>
              <p className={styles.logoTextSmall}>
                Sign up for our newsletter to get updates straight to your inbox
              </p>

              <div className={styles.inputContainer}>
                <input
                  type="email"
                  className={styles.logoInput}
                  placeholder="name@email.com"
                />
                <div className={styles.formAction}>
                  <button>
                    <IoArrowForward className={styles.formIcon} />
                  </button>
                </div>
              </div>

              <div className={styles.checkBoxContainer}>
                <div className={styles.checkBoxFlex}>
                  <input type="checkBox" className={styles.checkBox} />
                  <p className={styles.checkBoxText}>
                    I agree to the <span>privacy policy</span>
                  </p>
                </div>
              </div>

              <div className={styles.socialMediaContainer}>
                <IoLogoInstagram className={styles.socialIcon} />
                <IoLogoFacebook className={styles.socialIcon} />
                <IoLogoTwitter className={styles.socialIcon} />
                <IoLogoYoutube className={styles.socialIcon} />
              </div>
            </div>
            <div className={styles.footerInfo}>
              <p className={styles.title}>USEFUL LINKS</p>
              <div className={styles.linkContainer}>
                <p className={styles.footerLink}>About us</p>
                <p className={styles.footerLink}>Services</p>
                <p className={styles.footerLink}>Information</p>
                <p className={styles.footerLink}>Policy</p>
              </div>
            </div>
            <div className={styles.footerInfo}>
              <p className={styles.title}>OUR TERMS</p>
              <div className={styles.linkContainer}>
                <p className={styles.footerLink}>Support</p>
                <p className={styles.footerLink}>Contacts</p>
                <p className={styles.footerLink}>Typography</p>
                <p className={styles.footerLink}>FAQ</p>
              </div>
            </div>
            <div className={styles.footerInfo}>
              <p className={styles.title}>SHOWROOM</p>
              <div className={styles.linkContainer}>
                <p className={styles.footerLink}>MNE, Auto, Queen St. 6512</p>
                <p className={styles.footerLink}>Phone.: +7 234 949-58-83</p>
                <p className={styles.footerLink}>E-mail.: info@example.com</p>
                <p className={styles.footerLink}>&copy; 2023 Dino K.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
