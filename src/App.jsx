import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import HomePage from "./components/navigation/HomePage";
import { Provider } from "react-redux";
import appStore from "./components/appStore";
import Login from "./components/Login";
import Services from "./components/Services";

function App() {

  return (
   <Provider store={appStore}>
     <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage/>} />
         <Route path="/about" element={<About/>} /> 
        <Route path="/patient/signup" element={<Login />} />
        <Route path="/patient/login" element={<Login />} />
         <Route path="/services" element={<Services/>} />
        
      </Routes>
    </BrowserRouter>

   </Provider>
     );
}

export default App;