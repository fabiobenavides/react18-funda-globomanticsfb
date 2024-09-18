import React, { useEffect, useState } from 'react'
import HouseRow from './HouseRow';

export default function HouseList() {

  const [houses, setHouses] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("/api/houses");
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouses();
  }, []); //This will fire the effect just once

  const addHouse = () => {
    setHouses([...houses, {
      id: counter,
      address: counter + "90210 Beverly Hills",
      country: "Los Angeles",
      price: 250000,
    }]);
    setCounter(current => counter + 1); //use current is recommended
  }
  

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
            {houses.map(h => (
                <HouseRow key={h.id} house={h} />
            ))}
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={addHouse}>
            Add a new house
      </button>
    </>
  )
}
