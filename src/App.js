import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Profil from './profil/ProfilPhoto';
import FullN from './profil/FullName';
import  Ad from './profil/Adress';
function App() {
  return (
    <div className="App" style={{backgroundColor:"#e74c3c"}}>
      <div className="profile" style={{marginTop:'50px'}}> 
        <Profil />
      </div>
      <button type="button" class="btn btn-outline-danger">Danger</button>

      <div className="fullname" style={{color:"#ecf0f1" , fontStyle:'oblique'}}>
          <FullN/>
      

      </div>

      <div className="Adress" style={{color:"#ecf0f1" , fontStyle:'oblique'}}>
        
        <Ad/>
      </div>
      
    </div>
  );
}

export default App;
