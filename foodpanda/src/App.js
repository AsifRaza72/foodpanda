// import './App.css';
import Header from './components/Header/Header'
import BodySection1 from  './components/Body/BodySection1'
import Cities from './components/Body/Cities'
import AppSection from './components/Body/AppsSection'
import About from './components/Body/About';
import Footer from './components/Footer/Footer'
import FooterContent from './components/Footer/FooterContent';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
<Header/>
<BodySection1/>
<Cities/>
<AppSection/>
<About/>
<Footer/>
<FooterContent/>
<Login></Login>

    </div>
  );
}

export default App;
