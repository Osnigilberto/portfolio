import styles from './MyselfStyles.module.css';
import MyselfImg from '../../assets/logo-portfolio1.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faFacebook,
  faXTwitter,
  faMastodon,
} from '@fortawesome/free-brands-svg-icons';
import CV from '../../assets/CV EN.pdf';
import { useTheme } from '../../common/ThemeContext';

// Aqui começa a criação da pagina principal
function Myself() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  return (
    <section id="myself" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={MyselfImg} alt="Myself" className={styles.myselfImg} />
        <img
          src={themeIcon}
          alt="Color mode icon"
          className={styles.hero}
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Osni Gilberto
          <br />
          Ferreira Junior
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/osnigilbertojunior/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/Osnigilberto" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/osniiferreira/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/juninhoferreir" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com/osniiferreira" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://mastodon.social/@osniferreira" target="_blank">
            <FontAwesomeIcon icon={faMastodon} />
          </a>
        </span>
        <p className={styles.description}>
          I am a front-end developer with experience in HTML, CSS, JavaScript
          and React, passionate about transforming ideas into interactive and
          intuitive interfaces. With solid skills in responsive design and
          usability, I create solutions that combine aesthetics and performance,
          providing optimized user experiences.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Myself;
