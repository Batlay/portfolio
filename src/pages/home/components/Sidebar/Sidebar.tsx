import styles from '@/pages/home/components/Sidebar/Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Портфолио</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Контакты</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
