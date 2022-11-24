import { CarIcon } from 'src/components/Icons/Icons'

const TransporationDetails = ({ name, pickup, price }) => {
  return (
    <div className="grid grid-cols-10 text-left">
      <p className="col-span-10 text-left text-lg font-semibold">{name}</p>
      <p className="col-span-2 font-semibold">Pickup:</p>
      <p className="col-span-8">{pickup}</p>
      <p className="col-span-2 font-semibold">Price/day:</p>
      <p className="col-span-8">{price}</p>
    </div>
  )
}

const TransportationPage = () => {
  return (
    <div className="w-full">
      <div className="px-20 text-center">
        <CarIcon className={'h-32 w-32'} />
        <p className="text-2xl font-bold">Transportation</p>
        <div className="mt-10 grid grid-cols-10 gap-3 border-2 p-4">
          <div className="col-span-3 border-2 p-1">BEEEEEEEB BEEEEEEEB</div>
          <div className="col-span-7 border-2 p-1">
            <TransporationDetails
              name={'Enterprise'}
              pickup={'Pickup at Pembina branch'}
              price={'26 CAD'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransportationPage
