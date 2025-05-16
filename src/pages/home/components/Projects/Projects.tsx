import styles from '@/pages/home/components/Projects/Projects.module.scss';
import breezeHouse from '@/assets/projects/breezeHouse.png';
import comfortStore from '@/assets/projects/comfortStore.png';
import portfolio from '@/assets/projects/portfolio.png';
import musicSite from '@/assets/projects/music-site.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
      'vite',
      'react',
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
    url: 'https://comfort-store-nu.vercel.app/',
    description: 'Просто крутое портфолио',
    technologies: ['webpack', 'react'],
    features: ['анимации'],
  },
  {
    title: 'Интернет-магазин Comfort Store',
    image: comfortStore,
    url: 'https://comfort-store-nu.vercel.app/',
    description: 'Интернет-магазин кондиционеров',
    technologies: [
      'typescript',
      'vite',
      'react',
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
    title: 'Портфолио',
    image: portfolio,
    url: 'https://comfort-store-nu.vercel.app/',
    description: 'Интернет-магазин кондиционеров',
    technologies: [
      'typescript',
      'vite',
      'react',
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
    description: 'Интернет-магазин кондиционеров',
    technologies: [
      'typescript',
      'vite',
      'react',
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
    title: 'Портфолио',
    image: portfolio,
    url: 'https://comfort-store-nu.vercel.app/',
    description: 'Интернет-магазин кондиционеров',
    technologies: [
      'typescript',
      'vite',
      'react',
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
