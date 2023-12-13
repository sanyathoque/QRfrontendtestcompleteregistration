import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [DOB, setDOB] = useState()
  const [male, setMale] = useState(false)
  const [female, setFemale] = useState(false)
  const [car, setCar] = useState(false)
  const [bike, setBike] = useState(false)
  const [auto, setAuto] = useState(false)
  const [driver, setDriver] = useState(false)
  const [vehicle_detail, setVehicle_detail] = useState()
  const [appearance, setAppearance] = useState()
  const [RC, setRC] = useState()
  const [vehicle_insurance, setVehicle_insurance] = useState()
  const [tax_permit, setTax_permit] = useState()
  const [vehicle_fitness, setVehicle_fitness] = useState()
  const [profile_picture, setProfile_picture] = useState()
  const [appearance_frontside, setAppearance_frontside] = useState()
  const [appearance_backside, setAppearance_backside] = useState()
  const [vehicle_insurance_pic, setVehicle_insurance_pic] = useState()
  const [vehicle_fitness_pic, setVehicle_fitness_pic] = useState()
  const [registration_certificate, setRegistration_certificate] = useState()

  const handleInputChangefirstname = (e) => {
    setFirstname(e.target.value)
  }
  const handleInputChangelastname = (e) => {
    setLastname(e.target.value)
  }
  const handleInputChangeDOB = (e) => {
    setDOB(e.target.value)
  }
  const handleInputChangemale = (e) => {
    setMale(male => !male)
  }
  const handleInputChangefemale = (e) => {
    setFemale(female => !female)
  }
  const handleInputChangecar = (e) => {
    setCar(car => !car)
  }
  const handleInputChangebike = (e) => {
    setBike(bike => !bike)
  }
  const handleInputChangeauto = (e) => {
    setAuto(auto => !auto)
  }
  const handleInputChangedriver = (e) => {
    setDriver(driver => !driver)
  }
  const handleInputChangevehicle_detail = (e) => {
    setVehicle_detail(e.target.value)
  }
  const handleInputChangeappearance = (e) => {
    setAppearance(e.target.value)
  }
  const handleInputChangeRC = (e) => {
    setRC(e.target.value)
  }
  const handleInputChangevehicle_insurance = (e) => {
    setVehicle_insurance(e.target.value)
  }
  const handleInputChangetax_permit = (e) => {
    setTax_permit(e.target.value)
  }
  const handleInputChangevehicle_fitness = (e) => {
    setVehicle_fitness(e.target.value)
  }
  const handleInputChangeprofile_picture = (e) => {
    setProfile_picture(e.target.files[0])
  }
  const handleInputChangeappearance_frontside = (e) => {
    setAppearance_frontside(e.target.files[0])
  }
  const handleInputChangeappearance_backside = (e) => {
    setAppearance_backside(e.target.files[0])
  }
  const handleInputChangevehicle_insurance_pic = (e) => {
    setVehicle_insurance_pic(e.target.files[0])
  }
  const handleInputChangevehicle_fitness_pic = (e) => {
    setVehicle_fitness_pic(e.target.files[0])
  }
  const handleInputChangeregistration_certificate = (e) => {
    setRegistration_certificate(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('firstname', firstname)
    console.log('lastname', lastname)
    console.log('DOB', DOB)
    console.log('male', male)
    console.log('female', female)
    console.log('car', car)
    console.log('bike', bike)
    console.log('auto', auto)
    console.log('driver', driver)
    console.log('vehicle_detail', vehicle_detail)
    console.log('appearance', appearance)
    console.log('RC', RC)
    console.log('vehicle_insurance', vehicle_insurance)
    console.log('tax_permit', tax_permit)
    console.log('vehicle_fitness', vehicle_fitness)
    console.log('profile_picture', profile_picture)
    console.log('appearance_frontside', appearance_frontside)
    console.log('appearance_backside', appearance_backside)
    console.log('vehicle_insurance_pic', vehicle_insurance_pic)
    console.log('vehicle_fitness_pic', vehicle_fitness_pic)
    console.log('registration_certificate', registration_certificate)

    const formDataToSend = new FormData();
    formDataToSend.append('firstname', firstname);
    formDataToSend.append('lastname', lastname);
    formDataToSend.append('DOB', DOB)
    formDataToSend.append('male', male)
    formDataToSend.append('female', female)
    formDataToSend.append('car', car)
    formDataToSend.append('bike', bike)
    formDataToSend.append('auto', auto)
    formDataToSend.append('driver', driver)
    formDataToSend.append('vehicle_detail', vehicle_detail)
    formDataToSend.append('appearance', appearance)
    formDataToSend.append('RC', RC)
    formDataToSend.append('vehicle_insurance', vehicle_insurance)
    formDataToSend.append('tax_permit', tax_permit)
    formDataToSend.append('vehicle_fitness', vehicle_fitness)
    formDataToSend.append('profile_picture', profile_picture)
    formDataToSend.append('appearance_frontside', appearance_frontside)
    formDataToSend.append('appearance_backside', appearance_backside)
    formDataToSend.append('vehicle_insurance_pic', vehicle_insurance_pic)
    formDataToSend.append('vehicle_fitness_pic', vehicle_fitness_pic)
    formDataToSend.append('registration_certificate', registration_certificate)

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
        <label>First Name:
          <input type="text" name="firstname" onChange={handleInputChangefirstname} />
        </label>
        <br />
        <label>Last Name:
          <input type="text" name="lastname" onChange={handleInputChangelastname} />
        </label>
        <br />
        <label>DOB:
          <input type="text" name="DOB" onChange={handleInputChangeDOB} />
        </label>
        <br />
        <label>male:
          {/* <input type="text" name="male" onChange={handleInputChangemale} /> */}
          <input type="Checkbox" value="male" onChange={handleInputChangemale} />
        </label>
        <br />
        <label>female:
          {/* <input type="text" name="female" onChange={handleInputChangefemale} /> */}
          <input type="Checkbox" value="female" onChange={handleInputChangefemale} />
        </label>
        <br />
        <label>car:
          {/* <input type="text" name="car" onChange={handleInputChangecar} /> */}
          <input type="Checkbox" value="car" onChange={handleInputChangecar} />
        </label>
        <br />
        <label>bike:
          {/* <input type="text" name="bike" onChange={handleInputChangebike} /> */}
          <input type="Checkbox" value="bike" onChange={handleInputChangebike} />
        </label>
        <br />
        <label>auto:
          {/* <input type="text" name="auto" onChange={handleInputChangeauto} /> */}
          <input type="Checkbox" value="auto" onChange={handleInputChangeauto} />
        </label>
        <br />
        <label>driver:
          {/* <input type="text" name="driver" onChange={handleInputChangedriver} /> */}
          <input type="Checkbox" value="driver" onChange={handleInputChangedriver} />
        </label>
        <br />
        <label>vehicle_detail:
          <input type="text" name="vehicle_detail" onChange={handleInputChangevehicle_detail} />
        </label>
        <br />
        <label>appearance:
          <input type="text" name="apprearance" onChange={handleInputChangeappearance} />
        </label>
        <br />
        <label>RC:
          <input type="text" name="RC" onChange={handleInputChangeRC} />
        </label>
        <br />
        <label>vehicle_insurance:
          <input type="text" name="vehicle_insurance" onChange={handleInputChangevehicle_insurance} />
        </label>
        <br />
        <label>tax_permit:
          <input type="text" name="tax_permit" onChange={handleInputChangetax_permit} />
        </label>
        <br />
        <label>vehicle_fitness:
          <input type="text" name="vehicle_fitness" onChange={handleInputChangevehicle_fitness} />
        </label>
        <br />
        <label>profile_picture:
          <input type="file" name="profile_picture" onChange={handleInputChangeprofile_picture} />
        </label>
        <br />
        <label>appearance_frontside:
          <input type="file" name="appearance_frontside" onChange={handleInputChangeappearance_frontside} />
        </label>
        <br />
        <label>appearance_backside:
          <input type="file" name="appearance_backside" onChange={handleInputChangeappearance_backside} />
        </label>
        <br />
        <label>vehicle_insurance_pic:
          <input type="file" name="vehicle_insurance_pic" onChange={handleInputChangevehicle_insurance_pic} />
        </label>
        <br />
        <label>vehicle_fitness_pic:
          <input type="file" name="vehicle_fitness_pic" onChange={handleInputChangevehicle_fitness_pic} />
        </label>
        <br />
        <label>registration_certificate:
          <input type="file" name="registration_certificate" onChange={handleInputChangeregistration_certificate} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
