import Topbar from "./components/topbar/topbar.jsx"
import Home from "./Pages/Home/Home.jsx";
import Single from "./Pages/Single/Single.jsx";
import Write from "./Pages/Write/Write.jsx";
import Setting from "./Pages/Setting/Setting.jsx";
import Login from "./Pages/Login/Login.jsx"
import Register from "./Pages/Register/Register.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Context } from "./context/Context";
import { useContext } from 'react'
function App() {
  const {user} = useContext(Context)
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route exact path="/post/:postId" element = {<Single />} />
          <Route exact path="/Write" element = {<Write />} />
          <Route exact path="/Setting" element = {<Setting />} />
          <Route exact path="/Login" element = {<Login />} />
          <Route exact path="/Register" element = {<Register />} />

        </Routes>



      </Router>

    </div>
  );
}

export default App;
