import React from 'react';
import { IoCodeWorking, IoPersonOutline } from 'react-icons/io5';

import StickyHelp from './components/stickyHelp/StickyHelp';
import Login from './pages/login/Login'

import './App.css';

function App() {

  const login = React.useRef();
  const [onHoverHelp, setOnHoverHelp] = React.useState(false)
  const [showLoginPage, setLoginPage] = React.useState(false)

  const handleLoginShow = () => {
    setLoginPage(!showLoginPage)
  }
  
  return (
    <div className="App">
      <Login show={showLoginPage}/>
      <content>
      <header className="App-header">
      <IoPersonOutline 
        onMouseOver={() => setOnHoverHelp(true)}
        onMouseLeave={() => setOnHoverHelp(false)}
        onClick={handleLoginShow}
        ref={login}
        className='loginIcon' />
      <StickyHelp message="Bejelentkezés" showHelp={onHoverHelp}/>
        <h1>SAP Fiori</h1>
      </header>
      
      <div className='menu'>
        <button>Fejlesztői környezet beállítása</button>
        <button>SAP Fiori riport típusok</button>
        <button>SAP Fiori adatmodelek</button>
        <button>Fiori alkalmazás készítése</button>
        <button>Fiori deploy</button>
        <button>Gyakran előforduló hibaüzenetek</button>
      </div>

      <footer>
        2022
      </footer>
      </content>
    </div>
  );
}

export default App;
