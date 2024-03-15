import "./App.css";
import Homepage from "./pages/homepage";
import Moviedetailspage from "./pages/moviedetailspage";
import Movies from "./pages/movies";
import SearchPage from "./pages/searchpage";
import Seriespage from "./pages/series";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path='/moviedetailspage/:id' element={<Moviedetailspage/>}></Route>
          <Route path='/search' element = {<SearchPage/>}></Route>
          <Route path="/movies" element ={<Movies/>}></Route>
          <Route path="/seriespage" element ={<Seriespage/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

