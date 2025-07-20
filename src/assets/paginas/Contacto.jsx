import MiCard from "../componentes/MiCard";
import NavBar from '../componentes/NavBar';


const Contacto = ()=>{
    return <><p className="text-center text-6xl mt-20">Contacto</p>
    <div className="flex justify-around items-center ">
      <NavBar />
      <MiCard />
      <div className="flex flex-col gap-10 w-75">
        <p className="text-2xl">Hey I’m Sinan, Full-stack developer</p>
        <p>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
      </div>
    </div></>
};


export default Contacto;