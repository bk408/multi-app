
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/Login'
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
