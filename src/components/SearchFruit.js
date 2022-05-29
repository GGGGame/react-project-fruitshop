import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../state/fetchData";

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

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="h-10 w-80 rounded-md outline-0"
        type="text"
        value={searchName}
        onChange={handleInput}
      />
      <button type="submit">Search</button>
    </form>
  );
};
