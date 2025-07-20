import { Link } from "react-router-dom";
import principal from "../img/navBar/Default.svg";
import habilidades from "../img/navBar/habilidades.svg";
import contact from "../img/navBar/contact.svg";
import user from "../img/navBar/user.svg";
import trabajos from "../img/navBar/trabajos.svg";
import "../css/navBar/index.css";

const style = {
  background: "#1A1E23",
};

const NavBar = () => {
  return (
    <>
      <div style={style} className=" w-[3rem] h-[20rem]   rounded-full">
        <nav className="flex flex-col items-center justify-center gap-3 h-full">
          <Link to={"/"} className="hover:bg-green-600 p-8 rounded-full">
            <img
              src={principal}
              alt="Principal"
              className="w-10 transition-all duration-300"
            />
          </Link>

          <Link to={"/sobremi"} className="  hover:bg-green-600 rounded-full">
            <img src={user} alt="Sobre Mi" className="w-10" />
          </Link>

          <Link
            to={"/habilidades"}
            className="mt-6 hover:bg-green-600 p-2 rounded-full"
          >
            <img src={habilidades} alt="Habilidades" className="w-10" />
          </Link>

          <Link
            to={"/proyectos"}
            className="mt-6 hover:bg-green-600 p-2 rounded-full"
          >
            <img src={trabajos} alt="Proyectos" className="w-10" />
          </Link>

          <Link
            to={"/contacto"}
            className="mt-6 hover:bg-green-600 p-2 rounded-full"
          >
            <img src={contact} alt="Contacto" className="w-10" />
          </Link>
        </nav>
      </div>
      <div className="clear-both"></div>
    </>
  );
};

export default NavBar;
