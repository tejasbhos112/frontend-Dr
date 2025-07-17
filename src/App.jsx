import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import HomePage from "./components/navigation/HomePage";

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage/>} />
         <Route path="/about" element={<About/>} /> 

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;