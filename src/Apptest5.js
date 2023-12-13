// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from 'react'

// function App() {
  
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     avatar: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;

//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { firstname, lastname, avatar } = formData;

//     const formDataToSend = new FormData();
//     formDataToSend.append('firstname', firstname);
//     formDataToSend.append('lastname', lastname);
//     formDataToSend.append('avatar', avatar);
//     // gallery.forEach((image, index) => {
//     //   formDataToSend.append(`gallery[${index}]`, image);
//     // });

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/vehicle_register', {
//         method: 'POST',
//         body: formDataToSend,
//       });

//       if (response.ok) {
//         console.log('Cool profile created successfully');
//       } else {
//         console.error('Failed to create cool profile');
//       }
//     } catch (error) {
//       console.error('Error during fetch:', error);
//     }
//   };
//   return (
//     <div className="App">
//       {/* <div>
//         {data?.map(x => {
//           console.log(data)
//           { return <img src={`data:image/png;base64,${convertToBase64new(x.profile_picture?.data.data)}`} width="300" /> }
//         })}
//       </div> */}
//       <form onSubmit={handleSubmit}>
//         <label>
//           First Name:
//           <input type="text" name="firstname" onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Last Name:
//           <input type="text" name="lastname" onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Avatar:
//           <input type="file" name="avatar" onChange={handleInputChange} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
