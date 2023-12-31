// import { Router, Routes, Route } from 'react-router-dom';
// import { Especiales} from './componentes/productos/especiales/Especiales.jsx'
import React, { useEffect, useState } from 'react';
// import Navegador from './componentes/Navegador.jsx';
import styled from 'styled-components';
import Hero from './componentes/Hero.jsx';
// import Menu from './componentes/menu/Menu.jsx';
import Piedepagina from './componentes/Piedepagina.jsx'
// import FormularioDeAutos from './componentes/productos/FormularioDeAutos.jsx';
import './App.css'
import Banner from './componentes/Banner.jsx';
import NavBar from './componentes/menu/NavBar.jsx';


function App() {
  const [autos, setAutos] = useState([]);
  useEffect(() => {
    const autosGuardados = JSON.parse(localStorage.getItem('autos'));
    if (autosGuardados) {
      setAutos(autosGuardados)
    }
  }, []);
  useEffect(() => {
      localStorage.setItem('autos', JSON.stringify(autos))
    }, [autos]);
  
  

  return (
    <section>
      <header>
        <NavBar/>
        {/* <Navegador></Navegador> */}
      </header>
      <main>
        <Hero />
        <Banner />
      </main>
      <footer>
        <Piedepagina></Piedepagina>
      </footer>
    </section>

  )

}

export default App
