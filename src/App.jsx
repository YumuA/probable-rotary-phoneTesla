import React from 'react';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MenuSup from './Components/MenuSup.jsx';
import PrincipalPage from './Components/PrincipalPage.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Contactame from './Components/Contactame.jsx';
import Abme from './Components/SobreMi.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <MenuSup />
        <main className='snap-y snap-mandatory relative w-full h-screen overflow-auto overflow-x-hidden '>
          <div className='snap-center'>
            <Routes>
              <Route
                path='/'
                element={
                  <PrincipalPage
                    title='Bienvenido'
                    parraf={'Soy Santiago Rojas Estudiante en Ingeniería en sistemas y freelancer'}
                    moreparraf={'Este es mi pagina web de presentación como desarrollador/programador'}
                    btn={'Contactame'}
                    btnhref='/Contactame'
                    imgbg='images/Homepage-Demo-Drive-Desktop-NA.webm'
                    
                  />
                }
              />
              <Route
                path='/portfolio'
                element={
                  <Portfolio
                    title={'Portfolio'}
                    parraf={'Accede a mi Github para ver mis proyectos'}
                    btn={'Haz click aquí para acceder'}
                    btnhref={'https://github.com/YumuA'}
                    imgbg={'images/985381.jpg'}
                  />
                }
              />
              <Route 
                path='/tme' 
                element={
                <Contactame 
                  title={'Contactame'}
                  parraf={'Te dejo un enlace a todas mis redes'}
                  btn={'Haz click aquí para desplegar un boton'}
                  btnhref={'https://github.com/YumuA'}
                  imgbg={'images/985381.jpg'} />} />
              <Route 
                path='/sobremi' 
                element={
                <Abme
                  title={'Sobre Mi'}
                  parraf={'Soy un estudiante de sistemas, apasionado por aprender'}
                  btn={'Tengo conocimientos de: '}
                  btnhref={'https://github.com/YumuA'}
                  imgbg={'images/985381.jpg'}                  />
              }/>
            </Routes>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
