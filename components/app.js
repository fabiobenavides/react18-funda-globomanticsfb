import React, { useState } from 'react'
import Banner from './banner'
import HouseList from './HouseList'
import House from './house';

export default function App() {

  const [selectedHouse, setSelectedHouse] = useState();

  return (
    <div>
      <Banner>
        <div>Getting text as props2</div>
      </Banner>
      { selectedHouse
        ? <House house={selectedHouse} />
        : <HouseList selectHouse={setSelectedHouse} />
      }
    </div>
  )
}
