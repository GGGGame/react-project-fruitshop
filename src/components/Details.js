export const Details = ({ detailsData, fruitData, buyData }) => {
  return (
    <div className="fixed top-0 h-screen w-full z-10 bg-gray-400 bg-opacity-50">
      <div className="flex justify-center w-full h-full">
        <div className="w-[40rem] mt-32 relative h-[30rem] bg-white border border-1 border-black">
          <div className="flex relative max-h-5/6">
            <img className="w-1/2" src={fruitData.image} alt="fruitimage" />
            <div className="flex flex-col m-2">
              <p className="m-3 text-xl">{fruitData.name}</p>
              <p className="m-3 decoration-black/[60%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button
                className="absolute right-0 mr-2"
                onClick={() => detailsData(false)}
              >
                X
              </button>
            </div>
          </div>
          <p className="m-4 text-xl">
            Prezzo <span className="ml-6">{fruitData.price}€</span>
          </p>
          <div className="absolute bottom-0 w-full">
            <div className="flex justify-between m-6">
              <button
                className="px-16 py-1 rounded-lg bg-[#F9CF93]"
                onClick={() => detailsData(false)}
              >
                Chiudi
              </button>
              <button
                className="px-16 py-1 rounded-lg bg-[#F9CF93]"
                onClick={() => buyData(fruitData)}
              >
                Acquista
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
