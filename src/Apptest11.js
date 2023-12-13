import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch("http://localhost:5000/api/images/get_vehicles")
      .then(res => { return res.json() })
      .then(res => {
        console.log('res', res[0])
        setData(res)
      })
      .catch(err => {
        console.log('err', err)
      })
  }, [])

  return (
    <div className="App">
      <div>
        {data?.map(x => {
          console.log(data)
          { return <img src={`data:image/png;base64,${convertToBase64new(x.profile_picture?.data.data)}`} width="300" /> }
        })}
      </div>
        <button type="submit">Submit</button>
    </div>
  );
}

export default App;
