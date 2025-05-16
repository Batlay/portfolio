import styles from '@/pages/home/components/About/About.module.scss';
import profileImg from '@/assets/profileImg.jpg';

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_img}>
        <img src={profileImg} />
      </div>
      <div className={styles.about_text}>
        <h1>Привет 👋, я Глеб</h1>
        <h2>Frontend Developer</h2>
        <br />
        <ul>
          Навыки и технологии:
          <li>Языки программирования: JavaScript, TypeScript</li>
          <li>Фреймворк: React</li>
          <li>Инструменты сборки и разработки: Webpack, Vite</li>
          <li>CSS и стилизация: Tailwind CSS, Sass/SCSS, CSS Modules</li>
          <li>Управление состоянием: Redux Toolkit, Zustand</li>
          <li>Работа с асинхронными данными: React Query</li>
          <li>Контейнеризация и деплой: Docker</li>
          <li>Eslint, Stylint, Prettier</li>
        </ul>
        <br />
      </div>
    </div>
  );
}

export default About;
