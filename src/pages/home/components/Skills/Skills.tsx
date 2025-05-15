import styles from '@/pages/home/components/Skills/Skills.module.scss';
import git from '@/assets/skills/git.png';
import css from '@/assets/skills/css.png';
import react from '@/assets/skills/react.png';
import rtk from '@/assets/skills/rtk.png';
import html from '@/assets/skills/html.png';
import js from '@/assets/skills/js.png';
import ts from '@/assets/skills/ts.png';
import webpack from '@/assets/skills/webpack.png';
import vite from '@/assets/skills/vite.png';
import eslint from '@/assets/skills/eslint.png';
import sass from '@/assets/skills/sass.png';
import docker from '@/assets/skills/docker.png';

function Skills() {
  const skillsImages = [ts, js, react, webpack, vite, rtk, docker, git, eslint, html, css, sass];

  return (
    <div className={styles.skills_wrapper}>
      {skillsImages.map((image, index) => (
        <img src={image} className={styles.skills_img} key={index} />
      ))}
    </div>
  );
}

export default Skills;
