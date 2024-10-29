import styles from './ProjectsStyles.module.css';
import catlovers from '../../assets/logocatlovers.png';
import matamosquito from '../../assets/Screenshot_4.png';
import ProjectCard from '../../common/ProjectCard';
const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={catlovers}
          link="https://github.com/Osnigilberto/Catlovers"
          h2="catlovers"
          p="A platform where users can find and share cat photos, connect with other
        cat lovers, and create a community."
        />
        <ProjectCard
          src={matamosquito}
          link="https://github.com/Osnigilberto/matamosquito"
          h2="matamosquito"
          p="The mosquito killer game was my first work in javascript, a game where you have to eliminate the flies before they disappear"
        />
      </div>
    </section>
  );
};

export default Projects;
