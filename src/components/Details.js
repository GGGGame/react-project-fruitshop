import { useDetails } from "../hooks/useDetails";

export const Details = ({ isActive }) => {
  const { details, onDetails } = useDetails(isActive);

  console.log(details);
};
