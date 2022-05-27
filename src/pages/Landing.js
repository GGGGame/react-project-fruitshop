import Lemon from "../assets/2 1.png";
import BlackBarry from "../assets/1 1.png";
import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
// import Logo from "../assets/logo.png";

export const Landing = () => {
  return (
    <div className="flex absolute flex-col relative">
      <div className="flex justify-between">
        <Logo logoStyle="mx-8 my-5 w-1/12 h-full" />
        <img
          className="w-1/2 max-w-[720px] max-h-[450px]"
          src={Lemon}
          alt="Lemon"
        />
      </div>
      <Logo logoStyle="absolute left-0 top-0 bottom-0 right-0 m-auto w-[12%]" />
      <div className="flex">
        <img
          className="w-1/2 max-w-[720px] max-h-[450px]"
          src={BlackBarry}
          alt="Blackbarries"
        />
        <div className="w-full flex flex-wrap flex-col items-center justify-center content-center">
          <h2 className="p-6 max-w-[435px] text-center text-base font-bold leading-7 break-words">
            Vuoi avere i migliori frutti direttamente a casa tua? Visita il
            nostro shop
          </h2>
          <Link
            to="home"
            className="w-2/12 text-center min-w-[124px] p-3 bg-[#F9E4C8]"
          >
            Vai allo shop
          </Link>
        </div>
      </div>
    </div>
  );
};
