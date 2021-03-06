import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{ useState } from 'react';
import About from './components/About';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1900);
  }

  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title=" Text Utility by Yash" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route>  */}
          {/* <Route path="/"> */}
          <TextForm mode={mode} showAlert={showAlert} />  
          {/* </Route> */}
        {/* </Switch> */}
       
        
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

