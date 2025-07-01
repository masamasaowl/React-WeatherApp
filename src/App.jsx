import './App.css'
import ErrorBoundary from './ErrorBoundary'
import Navbar from './Navbar'
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
