import { Link, Outlet } from 'react-router-dom';
import classes from './App.module.scss'

function App() {
  return ( 
    <div>
      Hello
      <button className={classes.button}>Button <span>span</span></button>
      <Link to='about'>about</Link>
      <Link to='shop'>shop</Link>
      <Outlet />
    </div>
  );
}

export default App;