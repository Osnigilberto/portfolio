import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Myself from './sections/Myself/Myself';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Myself />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
