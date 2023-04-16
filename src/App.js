import { Route, Routes, useNavigate } from "react-router-dom";
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
  const [movie, setMovie] = useState(data[0]);
  const [link, setLink] = useState(data[0].Title.replaceAll(" ", "-").toLowerCase());
  const [searchLink, setSearchLink] = useState();

  // const navigate = useNavigate(`movies/${searchLink}`);

  console.log('movies data');
  console.log(movie);
  console.log(link);
  console.log(searchLink);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setSearchLink={setSearchLink}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movies" element={<Movies data={data} data2={data2} actorsData={actorsData} setLink={setLink} setMovie={setMovie}/>}/>
        <Route path="/shows" element={<Shows/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path={`/movies/${link}`} element={<MovieDetails movie={movie} actorsData={actorsData}/>}/> 
        <Route path={`movies/${searchLink}`} element={<MovieDetails movie={movie} actorsData={actorsData}/>}/> 
        <Route path='*' element={<Nopage/>}/>
      </Routes>
    </div>
  );
}

export default App;
