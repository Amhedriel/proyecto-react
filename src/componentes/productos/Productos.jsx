import React from "react";
import { Link } from "react-router-dom";
import DatosAutos from "../productoindividual/DatosAutos";
import Piedepagina from "../Piedepagina";
import "./Productos.css";
import NavBar from '../menu/NavBar';

function Productos() {
    return (
        <>
          <header>
            <NavBar />
          </header>
            <main>
                <div className="contenedor-autos">
                    {DatosAutos.map((auto) => (
                        <Link to={`/Categorias/ProductoIn/${auto.Id}`} key={auto.Id}>
                            <div className="auto-contenedor">
                                <p>{auto.Nombre}</p>
                                <img src={auto.Image} alt={auto.Nombre} />
                            </div>
                        </Link>
                    ))}
                </div>
          </main>
          <footer>
            <Piedepagina />
          </footer>
        </>
    );
}

export default Productos;

