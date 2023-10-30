import { HashRouter, Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home/home";
import Login from "./Login /login";
import Feedback from "./Feedback/feedback";
import Search from "./Search/search";
import Dashboard from "./Dashboard/dashboard";
import Profile from "./Profile/profile";
import Settings from "./Settings/settings";
import Nav from "./Nav";
import GetStarted from "./Login /loginscreen";


function App() {
  return (
    <Router>
     
      <div>
      <Nav/>
        
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Login/loginscreen" element={<GetStarted />} />
        </Routes>
        

      </div>
    
    </Router>
  );
}

export default App;
