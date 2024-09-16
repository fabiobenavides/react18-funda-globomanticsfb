import React from 'react'
import Banner from './banner'
import HouseList from './HouseList'

export default function App() {
  return (
    <div>
      <Banner>
        <div>Getting text as props2</div>
      </Banner>
      <div>
        <HouseList />
      </div>
    </div>
  )
}
