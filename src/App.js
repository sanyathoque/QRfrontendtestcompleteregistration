import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function App() {
  const [username, setUsername] = useState()
  const [phone_number, setPhone_number] = useState()
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
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/auth/get-files");
      console.log(result.data.data);
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error.message);
      setError("Error fetching PDFs");
    }
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('phone_number', phone_number);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('DOB', DOB)
    formData.append('male', male)
    formData.append('female', female)
    formData.append('car', car)
    formData.append('bike', bike)
    formData.append('auto', auto)
    formData.append('driver', driver)
    formData.append('vehicle_detail', vehicle_detail)
    formData.append('appearance', appearance)
    formData.append('RC', RC)
    formData.append('vehicle_insurance', vehicle_insurance)
    formData.append('tax_permit', tax_permit)
    formData.append('vehicle_fitness', vehicle_fitness)
    formData.append('files', profile_picture)
    formData.append('files', appearance_frontside)
    formData.append('files', appearance_backside)
    formData.append('files', vehicle_insurance_pic)
    formData.append('files', vehicle_fitness_pic)
    formData.append('files', registration_certificate)
    try {
      const result = await axios.post(
        "http://localhost:5000/api/auth/vehicle_register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(result.statusText);
      if (result.statusText === "OK") {
        alert("Uploaded Successfully!!!");
        getPdf();
      }
    } catch (error) {
      console.error("Error uploading file:", error.message);
      setError("Error uploading file");
    }
  };
  const handleInputChangeusername = (e) => {
    setUsername(e.target.value)
    console.log("username", username)
  }
  const handleInputChangephone_number = (e) => {
    setPhone_number(e.target.value)
    console.log("phone_number", phone_number)
  }
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

  const showPdf = (pdf) => {
    setPdfFile(`http://localhost:5000/api/auth/files/${pdf}`);
  };

  return (
    <div className="App">
      <form className="formStyle" onSubmit={submitImage}>
        <label>User Name:
          <input type="text" name="username" onChange={handleInputChangeusername} />
        </label>
        <br />
        <label>Phone Number:
          <input type="number" name="phone_number" onChange={handleInputChangephone_number} />
        </label>
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
      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="output-div">
          {allImage?.map((data) => (
            <div>
              {/* {console.log("retrieved_data", data)} */}
              <p>{data.username}</p>
              <p>{data.phone_number}</p>
              <p>{data.firstname}</p>
              <p>{data.lastname}</p>
              <p>{data.DOB}</p>
              <p>{data.male}</p>
              <p>{data.female}</p>
              <p>{data.car}</p>
              <p>{data.bike}</p>
              <p>{data.auto}</p>
              <p>{data.driver}</p>
              <p>{data.vehicle_detail}</p>
              <p>{data.appearance}</p>
              <p>{data.RC}</p>
              <p>{data.vehicle_insurance}</p>
              <p>{data.tax_permit}</p>
              <p>{data.vehicle_fitness}</p>
              <img src={`http://localhost:5000/api/auth/files/${data.profile_picture}`} />
              <img src={`http://localhost:5000/api/auth/files/${data.appearance_frontside}`} />
              <img src={`http://localhost:5000/api/auth/files/${data.appearance_backside}`} />
              <img src={`http://localhost:5000/api/auth/files/${data.vehicle_insurance_pic}`} />
              <img src={`http://localhost:5000/api/auth/files/${data.vehicle_fitness_pic}`} />
              <img src={`http://localhost:5000/api/auth/files/${data.registration_certificate}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
