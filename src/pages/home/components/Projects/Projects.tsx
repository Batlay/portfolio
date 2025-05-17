import styles from '@/pages/home/components/Projects/Projects.module.scss';
import breezeHouse from '@/assets/projects/breezeHouse.png';
import comfortStore from '@/assets/projects/comfortStore.png';
import portfolio from '@/assets/projects/portfolio.png';
import musicSite from '@/assets/projects/music-site.png';
import runsmart from '@/assets/projects/runsmart.png';
import monovision from '@/assets/projects/monovision.png';
import Carousel from './Carousel';

export interface IProject {
  title: string;
  image: string;
  url: string;
  description: string;
  technologies: string[];
  features: string[];
}

const projects: IProject[] = [
  {
    title: 'Интернет-магазин BreezeHouse',
    image: breezeHouse,
    url: 'https://breath-house.vercel.app/',
    description: 'Интернет-магазин кондиционеров',
    technologies: [
      'typescript',
      'react',
      'tailwind',
      'vite',
      'react-query',
      'react-hook-form',
    ],
    features: [
      'пагинация',
      'фильтрация продуктов',
      'поиск товаров',
      'корзина',
      'JWT токены',
    ],
  },
  {
    title: 'Интернет-магазин Comfort Store',
    image: comfortStore,
    url: 'https://comfort-store-nu.vercel.app/',
    description: 'Интернет-магазин мебели',
    technologies: [
      'typescript',
      'vite',
      'tailwind',
      'react',
      'react-query',
      'react-hook-form',
    ],
    features: [
      'пагинация',
      'фильтрация продуктов',
      'корзина',
      'работа с формами',
    ],
  },
  {
    title: 'Музыкальный сайт',
    image: musicSite,
    url: 'https://west-coast-music.netlify.app/',
    description:
      'Мой самый первый проект на JS. Написан 5 лет назад на костылях и полном незнании языка. Тем не менее он мне нравится до сих пор — сайт красивый и можно музыку послушать.',
    technologies: ['javascript', 'html', 'css'],
    features: ['музыкальный плеер', 'стиль и элегантность'],
  },
  {
    title: 'Портфолио',
    image: portfolio,
    url: 'https://portfolio-ten-theta-36.vercel.app/',
    description: 'Просто крутое портфолио',
    technologies: ['webpack', 'react', 'scss'],
    features: ['анимации'],
  },
  {
    title: 'Landing page Monovision-Studio',
    image: monovision,
    url: 'https://batlay.github.io/Monovision-Studio/src/',
    description: 'Лэндинг',
    technologies: ['css', 'js'],
    features: ['адаптивная верстка'],
  },
  {
    title: 'Landing page RunSmart',
    image: runsmart,
    url: 'https://batlay.github.io/RunSmart/src/',
    description: 'Лэндинг',
    technologies: ['css', 'js'],
    features: ['верстка'],
  },
];

function Projects() {
  return (
    <div className={styles.projects_wrapper}>
      <h2>Мои проекты</h2>
      <Carousel projects={projects} />
    </div>
  );
}

export default Projects;
