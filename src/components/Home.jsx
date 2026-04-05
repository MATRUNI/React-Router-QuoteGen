import {Outlet} from 'react-router-dom';
import Nav from './Nav';
function Home() {
  return (
    <div className='main-div'>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Home