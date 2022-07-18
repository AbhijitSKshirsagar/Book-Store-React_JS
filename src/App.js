import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './component/Home/BookHome';
//import Footer from "./component/Footer/Footer";
import Regiser from './component/UserRegistration/RegisterForm'
import Login from "./Login/Login";
import Cart from './component/Cart/Cart'
import Customer from './component/UserRegistration/CustomerDetails'
import Order from './component/Order/placeOrder'
//import Carts from './component/Cart/Carts.tsx'
import OrderSuccess from "./component/Order/OrderSuccess";
import Buy from "./component/Home/Buy";

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
            <Route path="/customer"><Customer /></Route>
            <Route path="/order"><Order/></Route>
            <Route exact path="/Order/:id"><Order /></Route>
            {/* <Route path="/carts"><Carts/></Route> */}
            <Route path="/success"><OrderSuccess/></Route>
            <Route path="/buy"><Buy/></Route>
          </Switch>
        </Router>      
    </div>
  );
}


export default App;