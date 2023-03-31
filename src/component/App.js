import './App.css';
import Body from './body/Body';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from '../component/body/Cart'
import { ShopContextProvider } from "./context/shop-context";
import { Navbar } from './navbar/Navbar';
function App() {
  return (
    <div className="App">
      <h1>Wellcome to our Thor Ecommerce Website</h1>
      <ShopContextProvider>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        </ShopContextProvider>
    </div>
  );
}

export default App;
