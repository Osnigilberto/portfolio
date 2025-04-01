import styles from './ProjectsStyles.module.css';
import catlovers from '../../assets/logocatlovers.png';
import matamosquito from '../../assets/Screenshot_4.png';
import ProjectCard from '../../common/ProjectCard';
import signup from '../../assets/signup.png';
import ticTacToe from '../../assets/tictactoe.png';
import espacomuniz from '../../assets/espacomuniz.png';
import farmers from '../../assets/farmers.png';
import coffeeshop from '../../assets/coffeeshop.png';
const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={catlovers}
          link="https://github.com/Osnigilberto/Catlovers"
          h2="Catlovers"
          p="A platform where users can find and share cat photos, connect with other
        cat lovers, and create a community."
        />
        <ProjectCard
          src={matamosquito}
          link="https://osnigilberto.github.io/matamosquito/"
          h2="Mata Mosquito"
          p="The mosquito killer game was my first work in javascript, a game where you have to eliminate the flies before they disappear"
        />
        <ProjectCard
          src={signup}
          link="https://criarconta-entrar.netlify.app/"
          h2="Sign Up - Login"
          p="A user authentication interface for login and signup, featuring validation, responsive design, and integration-ready structure for backend APIs"
        /> 
        <ProjectCard
          src={ticTacToe} // substitua 'ticTacToeImage' pelo caminho ou import da imagem representando o projeto
          link="https://react-jogodavelha.netlify.app/"
          h2="Tic Tac Toe"
          p="A classic Tic-Tac-Toe game built with React, featuring customizable icons, responsive design, and engaging gameplay."
        />
        <ProjectCard
          src={espacomuniz}
          link= "https://espacomuniz.vercel.app/"
          h2= "Espaço Muniz Castro"
          p= "Espaço Muniz Castro specializes in chiropractic care and myofascial release, offering personalized treatments to improve our patients' health and well-being."
        />
        <ProjectCard
          src={farmers}
          link="https://farmers-livid.vercel.app/"
          h2= "Antônio Carlos Farmers"
          p="Antônio Carlos Farmers is a social basketball project in the city of Antônio Carlos, SC."
          />
          <ProjectCard
          src={coffeeshop}
          link="https://cafeteriapao.netlify.app/"
          h2= "Coffee Shop"
          p="From bean to cup, with love and quality."
          />
          <ProjectCard
          src={codeqrgene}
          link="https://codeqrgene.netlify.app/"
          h2= "Generation code qr"
          p="Generate code qr"
          />
          <ProjectCard
          src={personaltrainer}
          link="https://personaltraine.netlify.app/"
          h2= "Personal Trainer"
          p="Achieve Your Goals with Personalized Training! 💪🏋️"
          />
      </div>
    </section>
  );
};

export default Projects;
