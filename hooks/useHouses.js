import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const { get, loadingState } = useGetRequest("/api/houses");

  useEffect(() => {
    const fetchHouses = async () => {

        const houses = await get();
        setHouses(houses);
    };
    fetchHouses();
  }, [get]); //The dependency "[]" will fire the effect just once, remove it and it will keep running

  return { houses, setHouses, loadingState }
};

export default useHouses;