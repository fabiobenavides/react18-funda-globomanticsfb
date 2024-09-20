import { useEffect, useState } from "react";

const useHouses = () => {
    const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("/api/houses");
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouses();
  }, []); //The dependency "[]" will fire the effect just once, remove it and it will keep running

  return { houses, setHouses }
};

export default useHouses;