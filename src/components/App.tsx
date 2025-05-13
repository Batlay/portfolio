import { Link, Outlet } from 'react-router-dom';
import classes from '@/components/App.module.scss'
import imagePng from '@/assets/heat.jpg'
import imageJpg from '@/assets/december.png'
import Logo from '@/assets/logo.svg'

function App() {
  return ( 
    <div data-testid={'App.DataTestId'}>
      <h1 data-testid={'Platform'}>Platform {__PLATFORM__}</h1>
      <div>
        <img src={imagePng} width={100} height={100}/>
        <img src={imageJpg} width={100} height={100}/>
      </div>
      <div>
        <Logo fill={'red'} width={100} height={100}/>
      </div>
      <button className={classes.button}>Button <span>span</span></button>
      <Link to='about'>about</Link>
      <Link to='shop'>shop</Link>
      <Outlet />
    </div>
  );
}

export default App;