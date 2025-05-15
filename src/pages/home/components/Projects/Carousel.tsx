import { useState } from 'react';
import { IProject } from './Projects';
import Card from './Card';
import styles from '@/pages/home/components/Projects/Projects.module.scss';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdOutlineArrowBackIos } from 'react-icons/md';

interface Props {
  projects: IProject[];
}

const Carousel = ({ projects }: Props) => {
  const slidesToShow = 3; // показывать 3 карточки
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

  // смещение
  const translateXPercent = -(currentIndex * (100 / totalProjects) * slidesToShow);

  function calculateTranslateX(): string {
    if (currentIndex === 0) {
      return `translateX(${translateXPercent}%)`;
    } else if (currentIndex > 2 && currentIndex < totalProjects - 4) {
      return `translateX(calc(${translateXPercent}% + 50px))`;
    } else {
      return `translateX(calc(${translateXPercent}% + 100px))`;
    }
  }
  const translateXValue: string = calculateTranslateX();

  return (
    <div className={styles.projects_carousel_container}>
      <div
        className={styles.projects_slides}
        style={{
          width: `${totalWidthPercent}%`,
          transform: translateXValue,
        }}
      >
        {projects.map((project, index) => (
          <div key={index} className={styles.project_card_wrapper}>
            <Card project={project} />
          </div>
        ))}
      </div>
      <button className={styles.prev_button} onClick={handlePrev} disabled={currentIndex === 0}>
        <MdOutlineArrowBackIos className={styles.prev_button_icon} />
      </button>
      <button
        className={styles.next_button}
        onClick={handleNext}
        disabled={currentIndex + slidesToShow >= totalProjects - 1}
      >
        <MdOutlineArrowForwardIos className={styles.next_button_icon} />
      </button>
    </div>
  );
};

export default Carousel;
