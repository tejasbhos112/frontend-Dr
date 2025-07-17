import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import HomePage from "./components/navigation/HomePage";
import { Provider } from "react-redux";
import appStore from "./components/appStore";
import Login from "./components/Login";

function App() {

  return (
   <Provider store={appStore}>
     <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage/>} />
         <Route path="/about" element={<About/>} /> 
         <Route path="/patient/login" element={<Login/>} />
        
      </Routes>
    </BrowserRouter>

   </Provider>
     );
}

export default App;