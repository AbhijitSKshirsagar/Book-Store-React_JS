import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './component/Home/BookHome';
//import Footer from "./component/Footer/Footer";
import Regiser from './component/UserRegistration/RegisterForm'
import Login from "./Login/Login";


function App() {
  return (
    <div className="App">
      {/* <Footer/> */}
      <Router>
          <Switch>
            <Route path="/home"><Home /></Route>
            <Route path="/Login"><Login/></Route>
            <Route path="/register"><Regiser /></Route>

          </Switch>
        </Router>      
    </div>
  );
}

export default App;