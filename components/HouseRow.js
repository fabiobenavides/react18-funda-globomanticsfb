import currencyFormatter from '@/helpers/currencyFormatter'
import React from 'react'

const HouseRow = ({ house }) => {
  return (
    <tr>
        <td>{house.address}</td>
        <td>{house.country}</td>
        <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  )
}

const HouseRowMem = React.memo(HouseRow); //This will provide cache, but use it with carefully, read doc before using it
//Where we are using the component:  HouseRow just replace it by: HouseRowMem

export default HouseRow;
export { HouseRowMem }