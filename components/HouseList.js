import useHouses from '@/hooks/useHouses';
import HouseRow from './HouseRow';
import loadingStatus from '@/helpers/loadingStatus';
import LoadingIndicator from './loadingIndicator';

export default function HouseList({ selectHouse }) {

  const { houses, setHouses, loadingState } = useHouses();  

  if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />

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
                <HouseRow key={h.id} house={h} selectHouse={selectHouse} />
            ))}
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={addHouse}>
            Add a new house
      </button>
    </>
  )
}
