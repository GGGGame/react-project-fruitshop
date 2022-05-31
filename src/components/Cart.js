import TrashImg from "../assets/Rectangle 29.png";

export const Cart = ({ cartItems, cartClick, removeItem }) => {
  return (
    <div className="fixed w-full h-screen z-10 bg-gray-400 bg-opacity-50">
      <div className="flex mt-32 justify-center w-full h-full">
        <div className="w-[40rem] h-64 relative bg-white border border-1 border-black">
          <h1 className="p-6">Carrello</h1>
          <div className="border-y border-1 border-black h-20 overflow-auto">
            {cartItems.map((value, index) => (
              <div className="flex w-full h-full justify-between" key={index}>
                <div className="flex">
                  <img
                    className="w-full h-full"
                    src={value.image}
                    alt="cartfruit"
                  />
                  <p className="ml-8 my-auto">
                    {value.name}
                    <span className="ml-4">{value.price}€</span>
                  </p>
                </div>
                <img
                  onClick={() => removeItem(index)}
                  className="h-1/2 my-auto"
                  src={TrashImg}
                  alt="delete"
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="flex justify-center m-6">
              <button
                className="px-16 py-1 rounded-lg bg-[#F9CF93]"
                onClick={() => cartClick(false)}
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
