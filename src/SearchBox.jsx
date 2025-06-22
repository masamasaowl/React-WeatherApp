import './SearchBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox() {
  let [city, setCity] = useState("");

  let handleChange = (evt) => {
    setCity(evt.target.value);
  }

  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
  }


  return (
    <div className='input'>
      <form action="/" onSubmit={handleSubmit}>
        <TextField className='SearchBox' id="outlined-basic" label="Your City" variant="outlined" required onChange={handleChange} />


        <Button type='submit' className='SubmitBtn' variant="contained" 
        sx={{
          marginTop: 3,
          backgroundColor: '#1e88e5',
        }}>Search</Button>
      </form>
        
    </div>
  )
}