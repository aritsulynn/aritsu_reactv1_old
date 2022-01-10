// import logo from './logo.svg';
import './App.css';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

//import components
import AppHeader from './components/AppHeader'
import Footer from './components/Footer'

import { Helmet } from "react-helmet";
// import { Button } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Helmet bodyAttributes={{style: 'background-color : #212529'}}/>
      <AppHeader />
      <div className = "CoverImg addFont">
        <h1 style={{fontSize: '50px'}}>Welcome to</h1>
        <h1 style={{fontSize: '70px'}}>"Gendary!"</h1>
      </div>

      {/* <div className="app-grid">
      </div> */}
      <div class='addFont' style={{textAlign: 'center', background: 'yellow', textJustify: 'center', alignItems: 'center'}}>
        <p>This site is under redeveloped by react! {'\n'} Some Feature or page might not working</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
