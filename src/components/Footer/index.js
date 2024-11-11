// components/Footer/Footer.js
import styles from "@/components/Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Lado Esquerdo */}
        <div className={styles.footerLeft}>
          <ul className={styles.footerItems}>
            <li>Português (Brasil)</li>
            <li>English (US)</li>
            <li>Español</li>
            <li>Français (France)</li>
            <li>Italiano</li>
          </ul>
        </div>
        {/* Lado Direito */}
        <div className={styles.footerRight}>
          <ul>
            <li>The Games &copy; 2024</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
