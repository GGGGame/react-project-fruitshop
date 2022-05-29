// import { useContext } from "react";
import { useSelector } from "react-redux";
// import { SearchContext } from "../context/searchContext";

export const Home = () => {
  const fetchFruit = useSelector((state) => state.fetchFruit[0]);

  return (
    <div className="py-2 pl-16 pr-16">
      <h1 className="py-2 pb-2 text-3xl font-normal leading-9">
        Seleziona un Frutto
      </h1>
      <div className="flex max-h-4/5 flex-wrap justify-between overflow-auto">
        {fetchFruit &&
          fetchFruit.map((value, index) => (
            <div
              key={index}
              className="relative pb-9 w-56 h-80 mr-8 mb-11 bg-[#FAEEE0] border border-black"
            >
              <img src={value.image} className="h-56 w-full" alt="cardfruit" />
              <div className="flex justify-between ml-2 mr-2">
                <p>{value.name}</p>
                <p>{value.price}€</p>
              </div>
              <p className="ml-2">Lorem ipusm...</p>
              <div className="absolute bottom-0 flex w-full align-eng mb-1">
                <button className="bg-[#F9CF93] rounded mr-auto ml-auto p-1">
                  Dettagli
                  {console.log(fetchFruit)}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
