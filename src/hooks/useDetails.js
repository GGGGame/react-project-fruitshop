import { useState } from "react";

export const useDetails = (initialState) => {
  const [details, setDetails] = useState(initialState);

  const handleDetails = (isActive) => {
    setDetails(isActive);
  };

  return {
    details: details,
    onDetails: handleDetails,
  };
};
