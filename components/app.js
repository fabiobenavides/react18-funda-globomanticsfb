import React, { useState } from 'react'
import Banner from './banner'
import HouseList from './HouseList'
import House from './house';

export default function App() {

  const [selectedHouse, setSelectedHouse] = useState();

  const setSelectedHousewrapper = (house) => {
    //add checks to verify tha the object is a real house
    setSelectedHouse(house);
  }

  return (
    <div>
      <Banner>
        <div>Getting text as props2</div>
      </Banner>
      { selectedHouse
        ? <House house={selectedHouse} />
        : <HouseList selectHouse={setSelectedHousewrapper} />
      }
    </div>
  )
}
