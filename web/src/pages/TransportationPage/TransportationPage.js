import { CarIcon } from 'src/components/Icons/Icons'
import { transportation } from 'src/mockedData'

const TransporationDetails = ({ type, location, price, website }) => {
  return (
    <div className="grid grid-cols-10 px-2 text-left">
      <p className="col-span-10 text-left text-lg font-semibold">{type}</p>
      <p className="col-span-2 font-semibold">Location:</p>
      <p className="col-span-8">{location}</p>
      <p className="col-span-2 font-semibold">Price/day:</p>
      <p className="col-span-8">{price}</p>
      <p className="col-span-2 font-semibold">Website:</p>
      <a className="col-span-8 text-blue-500 underline" href={website}>
        {website}
      </a>
    </div>
  )
}

const TransportationPage = () => {
  return (
    <div className="w-full">
      <div className="px-20 text-center">
        <CarIcon className={'h-32 w-32'} disabled />
        <p className="text-2xl font-bold">Transportation</p>
        <div className="mt-10 grid grid-cols-10 gap-3 border-2 p-4">
          {transportation.map((t) => (
            <>
              <div className="col-span-3 border-2 p-1">BEEEEEEEB BEEEEEEEB</div>
              <div className="col-span-7 border-2 p-1">
                <TransporationDetails
                  type={t.type}
                  location={t.location}
                  price={t.price}
                  website={t.website}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TransportationPage
