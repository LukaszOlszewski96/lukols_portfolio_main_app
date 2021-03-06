import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Page/Home/Home';
import AboutMe from './Page/AboutMe/AboutMe';
import Portfolio from './Page/Portfolio/Portfolio';
import Skill from './Page/Skill/Skill';
import Contact from './Page/Contact/Contact';
import MoreInfoUnien from './Page/Portfolio/moreInfo/MoreInfoUnien';
import MoreInfoPupil from './Page/Portfolio/moreInfo/MoreInfoPupil';
import ContactForm from './Page/Contact/ContactForm/ContactForm';
import MoreInfoLukols from './Page/Portfolio/moreInfo/MoreInfoLukols';
import Admin from './Components/Admin/Admin';

function App() {


  return (
    <Router>
      <Switch>
          <Route path="/" exact component>
            <Navbar/>
            <Home/>
            <AboutMe/>
            <Skill/>
            <Portfolio/>
            <Contact/>
          </Route>
          <Route path="/lukols-more" component={MoreInfoLukols}/>
          <Route path="/unien-more" component={MoreInfoUnien}/>
          <Route path="/pupil-more" component={MoreInfoPupil}/>
          <Route path="/contact" component={ContactForm}/>
          <Route path="/admin" component={Admin}/>
      </Switch>
  </Router>
  );
}

export default App;
