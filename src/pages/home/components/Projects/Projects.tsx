import styles from '@/pages/home/components/Projects/Projects.module.scss';
import breezeHouse from '@/assets/project/breezeHouse.png';
import comfortStore from '@/assets/project/comfortStore.png';
import portfolio from '@/assets/project/portfolio.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Carousel from './Carousel';

export interface IProject {
  title: string;
  image: string;
  url: string;
}

const projects = [
  {
    title: 'Интернет-магазин BreezeHouse',
    image: breezeHouse,
    url: 'https://breath-house.vercel.app/',
  },
  {
    title: 'Интернет-магазин Comfort Store',
    image: comfortStore,
    url: 'https://comfort-store-nu.vercel.app/',
  },
  {
    title: 'Портфолио',
    image: portfolio,
    url: 'https://comfort-store-nu.vercel.app/',
  },
  {
    title: 'Интернет-магазин BreezeHouse',
    image: breezeHouse,
    url: 'https://breath-house.vercel.app/',
  },
  {
    title: 'Интернет-магазин Comfort Store',
    image: comfortStore,
    url: 'https://comfort-store-nu.vercel.app/',
  },
  {
    title: 'Портфолио',
    image: portfolio,
    url: 'https://comfort-store-nu.vercel.app/',
  },
  {
    title: 'Интернет-магазин Comfort Store',
    image: comfortStore,
    url: 'https://comfort-store-nu.vercel.app/',
  },
  {
    title: 'Портфолио',
    image: portfolio,
    url: 'https://comfort-store-nu.vercel.app/',
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
