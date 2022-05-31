import { useState } from "react";
import { Cart } from "./Cart";
import { Logo } from "./Logo";
import { SearchFruit } from "./SearchFruit";

export const Navbar = ({ cartData }) => {
  const [cartOpen, setOpen] = useState(false);

  const openCart = (isActive) => {
    setOpen(isActive);
  };

  return (
    <div className="flex justify-between w-full h-1/3 bg-[#DBD0C0]">
      <Logo logoStyle="px-8 py-4 h-20" />
      <div className="self-center">
        <SearchFruit />
      </div>
      <button
        data-items={cartData.length}
        className={cartData.length > 0 ? "cart-amount" : "cart-zero"}
        onClick={() => openCart(true)}
      ></button>
      {cartOpen && <Cart cartItems={cartData} cartClick={openCart} />}
    </div>
  );
};
