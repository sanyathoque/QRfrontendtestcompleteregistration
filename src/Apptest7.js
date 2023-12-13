import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [avatar, setAvatar] = useState()

  const handleInputChangefirstName = (e) => {
    setFirstname(e.target.value)
  }
  const handleInputChangelastName = (e) => {
    setLastname(e.target.value)
  }
  const handleInputChangeAvatar = (e) => {
    setAvatar(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('firstname', firstname)
    console.log('lastname', lastname)
    console.log('avatar', avatar)
    
    const formDataToSend = new FormData();
    formDataToSend.append('firstname', firstname);
    formDataToSend.append('lastname', lastname);
    formDataToSend.append('avatar', avatar);

    try {
      const response = await fetch('http://localhost:5000/api/auth/vehicle_register', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        console.log('Cool profile created successfully');
      } else {
        console.error('Failed to create cool profile');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };
  return (
    <div className="App">
      <div>
        {/* {data?.map(x => {
          console.log(data)
          { return <img src={`data:image/png;base64,${convertToBase64new(x.profile_picture?.data.data)}`} width="300" /> }
        })} */}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstname" onChange={handleInputChangefirstName} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastname" onChange={handleInputChangelastName} />
        </label>
        <br />
        <label>
          Avatar:
          <input type="file" name="avatar" onChange={handleInputChangeAvatar} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
