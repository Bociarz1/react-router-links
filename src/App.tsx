// import Browser Router in index.js
// import LINK, ROUTE and ROUTES 
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
    <Link to='/home'>Go to HOME</Link>
      <Routes>
        <Route
          path='/home'
          element={<Home/>}   
        />
      </Routes>
    </>
  );
}

export default App;
