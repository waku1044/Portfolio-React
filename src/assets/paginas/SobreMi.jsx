import MiCard from "../componentes/MiCard";
import NavBar from "../componentes/NavBar";

const SobreMi = () => {
  return (
    <>
      <div className="bg-black h-dvh ">
        <div className="relative top-10">
          <div className="flex justify-around items-center">
            <NavBar />
            <MiCard />
            <div className="flex flex-col gap-10 w-75 ">
              <p className="text-3xl mb-5 text-amber-200  ">FullStack Developer</p>
              <p className="text-2xl text-white">Hey I’m Sinan, Full-stack developer</p>
              <p className="text-white">
                I help business grow by crafting amazing web experiences. If
                you’re looking for a developer that likes to get stuff done,
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreMi;
