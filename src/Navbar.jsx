import SimpleMapLoader from './GoogleMaps'
import './Navbar.css'
import logo from './assets/your-cloud-copy.svg'
export default function Navbar() {
  return (
    <div>
        <img className='logo' src={logo} alt="logo" />
    </div>
  )
}