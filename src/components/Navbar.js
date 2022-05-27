import { Logo } from "./Logo";
import Cart from "../assets/3 1.png";

export const Navbar = () => {
  return (
    <div className="flex justify-between w-full h-1/3 bg-[#DBD0C0]">
      <Logo logoStyle="px-8 py-5 h-28" />
      <img className="px-8 py-5 h-full self-center" src={Cart} alt="cart" />
    </div>
  );
};
