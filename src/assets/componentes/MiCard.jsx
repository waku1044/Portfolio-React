import fotPerfil from "../img/miCard/perfil.jpg";
import correo from "../img/miCard/icon-mail.svg";
import location from "../img/miCard/icon-map-pin.svg";
import portafolio from "../img/miCard/icon-briefcase.svg";
import telefono from "../img/miCard/icon-phone.svg";
import { MdOutlineFileDownload } from "react-icons/md";
import "../css/miCard/styleMiCard.css";

const MiCard = () => {
  const tipografia = {
    fontFamily: "IBM Plex Mono",
  };

  return (
    <>
      <div className="">
        <div className="glow-only-shadow gap-5 ">
          <img
            src={fotPerfil}
            className="rounded-full w-28 h-28 shadow-md shadow-amber-200 mb-10"
            alt="fotoPerfil"
          />

          <p style={tipografia} className="font-bold my-3 tracking-widest">
            Walter Gimenez
          </p>
          <p style={tipografia} className="font-normal text-[14px] mb-15">
            Full-Stack Developer
          </p>
          <div className="flex flex-col gap-4 mt-11">
            <div className="flex gap-3 align-items-center mt-10">
              <img src={correo} className="w-5" alt="correo" />
              <p>walterg610@gmail.com</p>
            </div>
            <div className="flex gap-2 align-items-center mt-3">
              <img src={location} className="w-5" alt="location" />
              <p>Argentina - Buenos Aires</p>
            </div>
            <div className="flex gap-2 align-items-center mt-3">
              <img src={portafolio} className="w-5" alt="portafolio" />
              <p>Full Time - Freelancer</p>
            </div>
            <div className="flex gap-2 align-items-center mt-3">
              <img src={telefono} className="w-5" alt="telefono" />
              <p>+54-3489-558201</p>
            </div>
            <a
              href="/cvwalterDev.pdf"
              download
              className="text-cyan-950 bg-neutral-50 rounded-full mt-7 flex items-center justify-center h-10"
            >
              <MdOutlineFileDownload className="w-10" />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiCard;
