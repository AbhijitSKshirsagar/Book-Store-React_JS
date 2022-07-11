import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './component/Home/BookHome';
//import Footer from "./component/Footer/Footer";
import Regiser from './component/UserRegistration/RegisterForm'
import Login from "./Login/Login";
import Cart from './component/Cart/Cart'
import Order from './component/Order/placeOrder'


function App() {
  return (
    <div className="App">
      {/* <Footer/> */}
      <Router>
          <Switch>
            <Route path="/home"><Home /></Route>
            <Route path="/Login"><Login/></Route>
            <Route path="/register"><Regiser /></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/order"><Order/></Route>
          </Switch>
        </Router>      
    </div>
  );
}

export default App;