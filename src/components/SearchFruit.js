import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData, resetData } from "../state/fetchData";

export const SearchFruit = () => {
  const [searchName, searchData] = useState("");
  const dispatch = useDispatch();

  const handleInput = (event) => {
    searchData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      fetchData("https://fruits-develhope.herokuapp.com/api", searchName)
    );
  };

  const handleReset = (event) => {
    event.preventDefault();

    searchData("");
    dispatch(resetData());
    dispatch(fetchData("https://fruits-develhope.herokuapp.com/api"));
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <input
        className="h-10 w-80 rounded-md outline-0"
        type="text"
        value={searchName}
        onChange={handleInput}
      />
      <button className="bg-[#F9CF93] rounded p-1 mr-1 ml-1" type="submit">
        Search
      </button>
      <button className="bg-[#F9CF93] rounded p-1 mr-1 ml-1" type="reset">
        Reset
      </button>
    </form>
  );
};
