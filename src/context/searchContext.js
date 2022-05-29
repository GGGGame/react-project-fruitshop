import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchFruit = (props) => {
  const [searchName, searchData] = useState("");

  const handleInput = (event) => {
    searchData(event.target.value);
  };

  return (
    <div>
      <input
        className="h-10 w-80 rounded-md outline-0"
        type="text"
        value={searchName}
        onChange={handleInput}
      />
      <SearchContext.Provider value={searchName}>
        {props.children}
      </SearchContext.Provider>
    </div>
  );
};
