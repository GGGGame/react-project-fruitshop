import { useState } from "react";
import { useSelector } from "react-redux";
import { Details } from "../components/Details";

export const Home = ({ buyButton }) => {
  const fetchFruit = useSelector((state) => state.fetchFruit[0]);
  const [dataFruit, getData] = useState([]);
  const [details, setDetails] = useState(false);

  const editDetails = (isActive, data) => {
    setDetails(isActive);
    getData(data);
  };

  return (
    <div>
      <div className="relative">
        {details && (
          <Details
            detailsData={editDetails}
            fruitData={dataFruit}
            buyData={buyButton}
          />
        )}
      </div>
      <div className="py-2 pl-16 pr-16">
        <h1 className="py-2 pb-2 text-3xl font-normal leading-9">
          Seleziona un Frutto
        </h1>
        <div className="flex max-h-4/5 flex-wrap justify-between overflow-auto">
          {fetchFruit && fetchFruit.length <= 0 && (
            <div className="w-full p-4">
              <p className="w-1/3 mx-auto text-center p-4 bg-red-500 border border-1 border-red-800 rounded text-xl">
                Can't find this fruit
              </p>
            </div>
          )}
          {fetchFruit &&
            fetchFruit.map((value, index) => (
              <div
                key={index}
                className="relative pb-9 w-56 h-80 mr-8 mb-11 bg-[#FAEEE0] border border-black"
              >
                <img
                  src={value.image}
                  className="h-56 w-full"
                  alt="cardfruit"
                />
                <div className="flex justify-between ml-2 mr-2">
                  <p>{value.name}</p>
                  <p>{value.price}€</p>
                </div>
                <p className="ml-2">Lorem ipusm...</p>
                <div className="absolute bottom-0 flex w-full align-eng mb-1">
                  <button
                    onClick={() => editDetails(true, value)}
                    className="bg-[#F9CF93] rounded mr-auto ml-auto p-1"
                  >
                    Dettagli
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
