import { useEffect, useState } from 'react';
import { IProject } from './Projects';
import Card from './Card';
import styles from '@/pages/home/components/Projects/Projects.module.scss';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdOutlineArrowBackIos } from 'react-icons/md';

interface Props {
  projects: IProject[];
}

const Carousel = ({ projects }: Props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth);

  useEffect(() => {
    // Функция для проверки ширины окна
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth);
    };

    // Вызовем сразу при монтировании
    handleResize();

    // Добавим слушателя на событие resize
    window.addEventListener('resize', handleResize);

    // Уберем слушателя при размонтировании
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function calculateSlides(): number {
    if (isSmallScreen <= 768 && isSmallScreen > 640) {
      return 2;
    } else if (isSmallScreen <= 640) {
      return 1;
    }
    return 3;
  }

  const slidesToShow = calculateSlides();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = Math.ceil(projects.length / 3) * 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - slidesToShow, 0));
  };

  const handleNext = () => {
    if (currentIndex + slidesToShow < totalProjects) {
      setCurrentIndex((prev) => prev + slidesToShow);
    }
  };

  // ширина всей ленты (в процентах)
  const totalWidthPercent = (totalProjects / slidesToShow) * 100;

  const translateXPercent = -(currentIndex * (100 / slidesToShow));

  return (
    <div className={styles.carousel_wrapper}>
      <div
        className={styles.carousel_full_width}
        style={{
          width: `${totalWidthPercent}%`,
          transform: ` translateX(${translateXPercent}%)`,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.carousel_items_wrapper}
            style={{ flex: `0 0 calc(100% / ${slidesToShow})` }}
          >
            <Card project={project} />
          </div>
        ))}
      </div>
      <button
        className={styles.prev_button}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <MdOutlineArrowBackIos className={styles.prev_button_icon} />
      </button>
      <button
        className={styles.next_button}
        onClick={handleNext}
        disabled={currentIndex + slidesToShow >= projects.length}
      >
        <MdOutlineArrowForwardIos className={styles.next_button_icon} />
      </button>
    </div>
  );
};

export default Carousel;
