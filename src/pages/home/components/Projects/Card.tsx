import styles from '@/pages/home/components/Projects/Projects.module.scss';
import { IProject } from './Projects';
import { useRef } from 'react';
import { BsInfoCircle } from 'react-icons/bs';

interface ProjectCardProps {
  project: IProject;
}

function Card({ project }: ProjectCardProps) {
  const cardRef = useRef(null);

  const handleClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  const handleMouseEnter = () => {
    console.log('enter');
    if (cardRef.current) {
      cardRef.current.classList.add(styles.rotate);
    }
  };

  const handleMouseLeave = () => {
    console.log('leave');
    if (cardRef.current) {
      cardRef.current.classList.remove(styles.rotate);
    }
  };

  return (
    <div ref={cardRef} className={styles.card} onClick={handleClick}>
      <BsInfoCircle
        width={50}
        height={50}
        className={styles.card_info}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div className={styles.card_inner}>
        <div className={styles.card_front}>
          <p>{project.title}</p>
          <div className={styles.card_front_img}>
            <img src={project.image} />
          </div>
        </div>
        <div className={styles.card_back}>
          <div className={styles.card_back_container}>
            <h2>Интернет-магазин кондиционеров:</h2>
            <ul>
              Используемые технологии:
              <li>typescript</li>
              <li>vite</li>
              <li>react</li>
              <li>react-query</li>
              <li>react-hook-form</li>
            </ul>
            <br />
            <p>Фичи: пагинация, фильтрация продуктов, поиск товаров, корзина, JWT токены.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
