import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Login from "./components/login/Login";
import Picture from "./assets/dresstoimpress.png"

function App() {
  return (
    <div>
      <Header />
      <div>
        <img className="picture" src={Picture} alt="" />
        <br />
        <h2 className="texto">Bem-vindos!
        <br />
        A Dress To Impress fica feliz em te receber👋</h2>
        <p></p>
      </div>
      <Outlet />
      <Footer />
    </div>
    
  );
}

export default App;
