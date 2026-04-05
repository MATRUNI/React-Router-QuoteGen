
import { useNavigate } from 'react-router-dom'

function Nav() {
    let navigate=useNavigate();
  return (
    <div style={{
        display:'flex',
        gap:'1rem',
        justifyContent:'center'}} className='nav-container'>
        <button onClick={()=>navigate('/')}>Home</button>
        <button onClick={()=>navigate('likedqoutes')}>Liked</button>
    </div>
  )
}

export default Nav