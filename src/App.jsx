import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home/>} >
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;