import './App.css';
import Cards from './Components/Cards';
import Navigation from './Components/Navigation/Navigation';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import HeroSection from './Components/HeroSection';


function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <HeroSection/>
      </Router>
      <Cards />
    </div>
  );
}

export default App;
