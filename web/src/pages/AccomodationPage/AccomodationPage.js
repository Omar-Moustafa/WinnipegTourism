import { HomeIcon } from 'src/components/Icons/Icons'

const AccomodationDetails = ({ name, rating, ammenities, price }) => {
  return (
    <div className="grid grid-cols-10 text-left">
      <p className="col-span-10 text-left text-lg font-semibold">{name}</p>
      <p className="col-span-2 font-semibold">Rating:</p>
      <p className="col-span-8">{rating}/5</p>
      <p className="col-span-2 font-semibold">Ammenities:</p>
      <p className="col-span-8">{ammenities}</p>
      <p className="col-span-2 font-semibold">Price/night:</p>
      <p className="col-span-8">{price}</p>
    </div>
  )
}

const AccomodationPage = () => {
  return (
    <div className="w-full">
      <div className="px-20 text-center">
        <HomeIcon className={'h-32 w-32'} />
        <p className="text-2xl font-bold">Accomodation</p>
        <div className="mt-10 grid grid-cols-10 gap-3 border-2 p-4">
          <div className="col-span-3 border-2 p-1">HERROOOOOOO</div>
          <div className="col-span-7 border-2 p-1">
            <AccomodationDetails
              name={'Hilton'}
              rating={5}
              ammenities={'Pool + Gym'}
              price={'50 CAD'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccomodationPage
