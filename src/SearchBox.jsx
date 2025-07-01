import './SearchBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import fetchLocation from './helpers/fetchLocation';
import getWeatherInfo from './APIs/getWeatherInfo'
import ResultBox from './ResultBox';


export default function SearchBox() {
  let [city, setCity] = useState("");
  let[info, setInfo] = useState({});

  // to trigger our result box
  let [submittedCity, setSubmittedCity] = useState("");

  useEffect(() => {
    // ask for location permissions
    fetchLocation();
  }, []);

  let handleChange = (evt) => {
    setCity(evt.target.value);
  }

  let handleSubmit = async(evt) => {
    evt.preventDefault();
    console.log(city);

    // fetch the promise, store inside data
    const data = await getWeatherInfo(city);
    console.log(data);

    // store everything inside info object
    setInfo(data);
     

    // trigger the result box
    setSubmittedCity(city);
    setCity("");
  };


  return (
    <div className='input'>
      <form action="/" onSubmit={handleSubmit}>
        <TextField className='SearchBox poppins' id="outlined-basic" label="Your City" variant="outlined" required onChange={handleChange} />


        <Button type='submit' className='SubmitBtn' variant="contained" 
        sx={{
          marginTop: 3,
          backgroundColor: '#1e88e5',
        }}>Search</Button>
      </form>

      {submittedCity && <ResultBox city={submittedCity} info = {info}/>}
    </div>
  )
}