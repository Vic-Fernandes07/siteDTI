import React from 'react'
import home from '../../assets/home.jpg'
import Closet from '../../assets/Closet.jpg'
import livro from '../../assets/livro.jpg'
import pessoa from '../../assets/pessoa.jpg'
import notificacao from '../../assets/notificacao.jpg'

const Header = () => {
  return (
    <>
    <div className="d-block bg-dark text-light">
        <div className="row m-0 divMenu m-0">
            {/*icones*/}
            <div className="col m-0 bg-black">
                <img className="home" src={home} alt="" />
                <img className="closet" src={Closet} alt="" />
                <img className="livro" src={livro} alt="" />
                <img className="pessoa" src={pessoa} alt="" />
                <img className="notificacao" src={notificacao} alt="" />
            </div>
        </div>
    </div>
  </> )
}

export default Header