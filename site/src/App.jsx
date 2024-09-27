import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Picture from "./assets/dresstoimpress.png";
import Profile from "./components/profile/perfil";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
