
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Component/Navbar';
import Signin from './Component/Signin';
import Event1 from './Component/Event1';
// import Wedding from './Component/Wedding';
import Wedding8 from './Component/Wedding8';
import { ShopContextProvider } from './Component/shopcontext';
import Hotel from './Component/Hotel';
import Bookingscreen from './Component/Bookingscreen';

function App() {
  return (
  <div>
  <ShopContextProvider>
    <Router>
    <Navbar/>
    
      <Routes>
        <Route exact path="/" element={<Event1/>}></Route>
        {/* <Route exact path="/wedding" element={<Wedding/>}></Route> */}
        <Route exact path="/signin" element={<Signin/>}></Route>
        <Route exact path="/getdata" element={<Wedding8/>}></Route>
        <Route exact path="/rooms" element={<Hotel/>}></Route>
        <Route exact path="/room/:roomid/:fromDate/:toDate" element={<Bookingscreen/>}></Route>

      </Routes>
    </Router>
    </ShopContextProvider>
  </div>
  );
}

export default App;
