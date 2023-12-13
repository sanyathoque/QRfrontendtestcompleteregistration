import logo from './logo.svg';
import './App.css';
import react, { useState, useEffect } from 'react'
import avatar from "./assets/profile_pic.png"

function App() {
  /////////////////////////////////
  const [data, setData] = useState()
  const [uploadimg, setUploadimg] = useState({ myFile: "" })
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

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader && fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }
  function convertToBase64new(file) {
    const fileReader = btoa(String.fromCharCode(...new Uint8Array(file)))
    return fileReader
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    console.log(base64)
    // setUploadimg({ ...uploadimg, myFile: base64 })
    setUploadimg({ myFile: base64 })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstname: "Sanyat",
        lastname: "Hoque",
        DOB: "78.78.78",
        male: "true",
        female: "female",
        car: "true",
        bike: "female",
        auto: "female",
        driver: "female",
        vehicle_detail: "very det",
        appearance: "red",
        RC: "RC",
        vehicle_insurance: "555-555-555",
        tax_permit: "555-555-555",
        vehicle_fitness: "555-555-555",
        profile_picture: {
          data: uploadimg.myFile,
          contentType: "image/png",
        },
        appearance_frontside: {
          data: uploadimg.myFile,
          contentType: "image/png",
        },
        appearance_backside: {
          data: uploadimg.myFile,
          contentType: "image/png",
        },
        vehicle_insurance: {
          data: uploadimg.myFile,
          contentType: "image/png",
        },
        vehicle_fitness: {
          data: uploadimg.myFile,
          contentType: "image/png",
        },
        registration_certificate: {
          data: uploadimg.myFile,
          contentType: "image/png",
        },
      })
    };
    // http://localhost:5000/api/auth/vehicle_register
    fetch('http://localhost:5000/api/auth/vehicle_register', requestOptions)
      .then(response => response.json())
      .then(data => console.log("Uploaded"))
      .catch(err => console.log(err))
  }
  /////////////////////////////////////////////
  
  return (
    <div className="App">
      {data?.map(x => {
        console.log("addidtion", x.profile_picture)
        { return x.profile_picture && <img src={`data:image/png;base64,${convertToBase64new(x.profile_picture?.data.data)}`} width="300" /> }
      })}
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <button>Click me</button>
      </form>

      <input type="file" label="Image" nmae="myFile" id="file-upload" accept=".jpeg, .jpg, .png" onChange={(e) => handleFileUpload(e)} />
    </div>
  );
}

export default App;
