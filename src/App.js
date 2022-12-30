import React from 'react';
// import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Ranks/rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import './App.css';



// const particlesOptions = {
//   Particles :{
//        params:{
//         polygon: {
//             enable: true,
//             type: 'inside',
//             move: {
//                 radius: 10
//             },
//             url: 'path/to/svg.svg'
//         }
//     }}
//   }

              

function App() {
  return (
    <div className="App">
    {/* <Particles className='particlesOptions'>
      params ={particlesOptions}
    </Particles> */}
    <Navigation />
    <Logo />
    <Rank/>
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
