import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import { useState } from "react";
import Nopage from "./pages/Nopage";
import Login from "./pages/Login";
import data from "./utils/Movies";
import data2 from "./utils/Upcoming"
import actorsData from "./utils/Actors";
import MovieDetails from "./pages/MovieDetails";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [link, setLink] = useState(null);

  // console.log('Printing link');
  // console.log(link);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movies" element={<Movies data={data} upcom={data2} actorsData={actorsData}/>}/>
        <Route path="/shows" element={<Shows/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        {/* <Route path="/movies/*" element={<MovieDetails/>}/>  */}
        <Route path='*' element={<Nopage/>}/>
      </Routes>
    </div>
  );
}

export default App;
