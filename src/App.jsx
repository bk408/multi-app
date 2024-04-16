
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/Login'
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./utils/store";

import Body from "./components/Body";
import Browse from "./components/Browse";

function App() {

 
  
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Body />
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
