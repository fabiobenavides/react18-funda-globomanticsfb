import currencyFormatter from '@/helpers/currencyFormatter'
import React, { useContext } from 'react'
import { navigationContext } from './app'
import navValues from '@/helpers/navValues';

const HouseRow = ({ house }) => {

  const { navigate } = useContext(navigationContext);

  return (
    <tr onClick={() => navigate(navValues.house, house)}>
        <td>{house.address}</td>
        <td>{house.country}</td>
        { house.price && 
          (<td className={`${house.price >= 500000 
            ? "text-primary"
            : "" }`}>
            {currencyFormatter.format(house.price)}
          </td>)}
    </tr>
  )
}

//const HouseRowMem = React.memo(HouseRow); //This will provide cache, but use it with carefully, read doc before using it
//Where we are using the component:  HouseRow just replace it by: HouseRowMem

export default HouseRow;
//export { HouseRowMem }