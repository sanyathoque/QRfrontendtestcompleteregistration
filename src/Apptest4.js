// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from 'react'

// function App() {

//   const [firstname, setFirstname] = useState()
//   const [lastname, setLastname] = useState()
//   const [profile_picture, setProfile_picture] = useState()

//   const handleInputChangefirstName = (e) => {
//     setFirstname(e.target.value)
//   }
//   const handleInputChangelastName = (e) => {
//     setLastname(e.target.value)
//   }
//   const handleInputChangeAvatar = (e) => {
//     setProfile_picture(e.target.value)
//   }
//   console.log('firstname', firstname)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     formDataToSend.append('firstname', firstname);
//     formDataToSend.append('lastname', lastname);
//     formDataToSend.append('profile_picture', profile_picture);

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
//       <div>
//         {/* {data?.map(x => {
//           console.log(data)
//           { return <img src={`data:image/png;base64,${convertToBase64new(x.profile_picture?.data.data)}`} width="300" /> }
//         })} */}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           First Name:
//           <input type="text" name="firstName" onChange={handleInputChangefirstName} />
//         </label>
//         <br />
//         <label>
//           Last Name:
//           <input type="text" name="lastName" onChange={handleInputChangelastName} />
//         </label>
//         <br />
//         <label>
//           Avatar:
//           <input type="file" name="profile_picture" onChange={handleInputChangeAvatar} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
