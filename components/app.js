import React from 'react'
import Banner from './banner'

export default function App() {

  const jsx = <div>Hi</div>


  return (
    <div>
      {jsx}
      <Banner>
        <div>Getting text as props2</div>
      </Banner>
      </div>
  )
}
