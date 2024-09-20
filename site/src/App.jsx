import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <Footer/>
      </div>
    </>
  )
}

const App = () => {
  return (
      <div>
          <h1>Conteúdo Principal</h1>
          <p>Aqui está o conteúdo da página.</p>
          <Footer />
      </div>
  );
};

export default App
