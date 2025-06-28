import './App.css'
import ErrorBoundary from './ErrorBoundary'
import SimpleMapLoader from './GoogleMaps'
import SimpleMap from './GoogleMaps'
import Navbar from './Navbar'
import ResultBox from './ResultBox'
import SearchBox from './SearchBox'
import VantaBackground from './VantaBackground'

export default function App() {
  // let coordinates = {
  //   lat: 28.6139, lng: 77.2090
  // }
  return (
    <>
    <ErrorBoundary>
      <VantaBackground/>
      <Navbar/>
      <SearchBox/>
    
    </ErrorBoundary>
    </>
  )
}
