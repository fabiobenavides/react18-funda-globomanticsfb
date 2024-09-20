import { useState } from "react";

const useHouses = () => {
    const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetchh("/api/houses");
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouses();
  }, []); //The dependency "[]" will fire the effect just once, remove it and it will keep running
}

export default { useHouses, setHouses };