import { Outlet } from 'react-router-dom';
import '@/globals.scss';
import Sidebar from './pages/home/components/Sidebar/Sidebar';
import styles from '@/pages/home/Home.module.scss';
function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
