import React from "react";
import {Link} from "react-router-dom"
//import Logo from '../assets/Logo.jsx'

class MenuSup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return(
      <>
      <header className="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white ">
        <div className=' flex flex-grow basis-0'>
        {/*<Logo />*/}
        </div>

        <nav>
          <ul className='flex text-sm [&>li>a]:inline-block [&>li>a]:py-4 [&>li>a]:px-2'>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/portfolio">Porfolio</Link></li>
            <li><Link to="/sobremi">Sobre mi</Link></li>
            <li><Link to="/tme">Contactame</Link></li>
          </ul>
        </nav>


        <nav className='flex flex-grow justify-end basis-0'>
          <ul className='flex text-sm [&>li>a]:inline-block [&>li>a]:py-4 [&>li>a]:px-2 '>
            <li><a href="#">Certificados</a></li>
            <li><a href="#">Redes Sociales</a></li>
            <li><a href="https://github.com/YumuA" target="blank_">Git Hub</a></li>
          </ul>
        </nav>
      </header>
      </>
      );
  }
}

export default MenuSup;  