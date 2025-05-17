import styles from '@/pages/home/components/Projects/Projects.module.scss';
import { IProject } from './Projects';
import { useEffect, useRef, useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';

interface ProjectCardProps {
  project: IProject;
}

function Card({ project }: ProjectCardProps) {
  const cardRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const hasTouchSupport =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouchSupport);
  }, []);

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
      {!isTouchDevice && (
        <BsInfoCircle
          width={50}
          height={50}
          className={styles.card_info}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
      <div className={styles.card_inner}>
        <div className={styles.card_front}>
          <p>{project.title}</p>
          <div className={styles.card_front_img}>
            <img src={project.image} />
          </div>
        </div>
        <div className={styles.card_back}>
          <div className={styles.card_back_container}>
            <h2>{project.description}</h2>
            <ul>
              Используемые технологии:
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <p>
              Фичи:{' '}
              {project.features.map((feature, index) => {
                if (index === project.features.length - 1) {
                  return <span key={index}>{feature}.</span>;
                } else {
                  return <span key={index}>{feature},</span>;
                }
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
