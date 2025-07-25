import { useState, useEffect } from "react";
import MiCard from "../componentes/MiCard";
import NavBar from "../componentes/NavBar";
import "../css/textLuminoso/index.css";

const SobreMi = () => {
  const [titulo, setTitulo] = useState("FullStack"); 
  const [count, setCount] = useState(1); // Contador para ciclar entre los títulos

  const titles = ["FullStack", "Frontend", "Backend"];

  const descripcion = `Soy un desarrollador Full Stack con enfoque en el stack MERN. Me apasiona construir aplicaciones web funcionales, escalables y con una buena experiencia de usuario.
Me gusta resolver problemas, trabajar en equipo y aprender constantemente nuevas herramientas y buenas prácticas. He trabajado en varios proyectos personales y colaborativos, y estoy buscando nuevos desafíos para seguir creciendo como profesional.`;

  useEffect(() => {
    // Solo actualiza el título y cuenta después de un pequeño retraso
    const timeout = setTimeout(() => {
      setTitulo(titles[count]);
      setCount((prevCount) => (prevCount + 1) % titles.length); // Ciclo entre los títulos
    }, 9000); // 3 segundos de espera entre cada título

    return () => clearTimeout(timeout); // Limpia el timeout al cambiar el componente o al actualizar el count
  }, [count]);

  return (
    <div className="bg-black h-dvh">
      <div className="relative top-10">
        <div className="flex justify-around items-center">
          <NavBar />
          <MiCard />
          <div className="flex flex-col gap-10 w-100">
          <p className="text-3xl mb-5 text-purple-600 letraAnimada">
              Desarrollador {titulo}.
            </p>
            
            <p className="text-2xl text-white">
              Hola, mi nombre es Walter Gimenez
            </p>
            <p className="text-emerald-400">{descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
