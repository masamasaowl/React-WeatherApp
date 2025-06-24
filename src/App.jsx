import './App.css'
import SimpleMap from './GoogleMaps'
import Navbar from './Navbar'
import SearchBox from './SearchBox'
import VantaBackground from './VantaBackground'

export default function App() {
  return (
    <>
    <VantaBackground/>
    <Navbar/>
    <SearchBox/>
    <SimpleMap/>
    </>
  )
}
