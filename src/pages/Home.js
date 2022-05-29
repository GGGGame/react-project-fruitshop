// import { useContext } from "react";
import { useSelector } from "react-redux";
// import { SearchContext } from "../context/searchContext";

export const Home = () => {
  const fetchFruit = useSelector((state) => state.fetchFruit[0]);
  // const getFruit = useContext(SearchContext);

  // console.log(getFruit);

  return (
    <div className="py-2 pl-16 pr-16">
      <h1 className="py-2 pb-2 text-3xl font-normal leading-9">
        Seleziona un Frutto
      </h1>
      <div className="flex max-h-4/5 flex-wrap overflow-auto">
        {
          /* {fetchFruit &&
          fetchFruit.map((value, index) => (
            <div key={index} className="pb-9 w-64 h-80">
              <img src={value.image} className="h-64" alt="cardfruit" />
              <p>{value.name}</p>
              <p>{value.price}</p>
            </div>
          ))} */
          console.log(fetchFruit)
        }
      </div>
    </div>
  );
};
