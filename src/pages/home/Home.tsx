import classes from '@/pages/home/Home.module.scss';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function Home() {
  return (
    <section className={classes.home}>
      <About />
      <Skills />
      <Projects />
    </section>
  );
}

export default Home;
