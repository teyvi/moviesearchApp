import "./App.css";
import Homepage from "./pages/homepage";
import Moviedetailspage from "./pages/moviedetailspage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path='/moviedetailspage/:id' element={<Moviedetailspage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

