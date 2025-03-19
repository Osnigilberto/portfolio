import styles from './SkillsStyles.module.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import SkillList from '../../common/SkillList';

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList icon={faCheck} skill="HTML" />
        <SkillList icon={faCheck} skill="CSS" />
        <SkillList icon={faCheck} skill="JavaScript" />
        <SkillList icon={faCheck} skill="CSS Responsivo" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={faCheck} skill="React" />
        <SkillList icon={faCheck} skill="Node.js" />
        <SkillList icon={faCheck} skill="Next.js" />
        <SkillList icon={faCheck} skill="RWD" />
        <SkillList icon={faCheck} skill="Solidity" />
        
      </div>
    </section>
  );
};

export default Skills;
