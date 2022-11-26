import { HomeIcon } from 'src/components/Icons/Icons'
import { accomodations } from 'src/mockedData'
const AccomodationDetails = ({
  name,
  rating,
  location,
  ammenities,
  price,
  website,
}) => {
  return (
    <div className="grid grid-cols-10 px-2 text-left">
      <p className="col-span-10 text-left text-lg font-semibold">{name}</p>
      <p className="col-span-2 font-semibold">Rating:</p>
      <p className="col-span-8">{rating}/5</p>
      <p className="col-span-2 font-semibold">Location:</p>
      <p className="col-span-8">{location}/5</p>
      <p className="col-span-2 font-semibold">Ammenities:</p>
      <p className="col-span-8">{ammenities}</p>
      <p className="col-span-2 font-semibold">Price/night:</p>
      <p className="col-span-8">{price}</p>
      <p className="col-span-2 font-semibold">Website:</p>
      <a className="col-span-8 text-blue-500 underline" href={website}>
        {website}
      </a>
    </div>
  )
}

const AccomodationPage = () => {
  return (
    <div className="w-full">
      <div className="px-20 text-center">
        <HomeIcon className={'h-32 w-32'} disabled />
        <p className="text-2xl font-bold">Accomodation</p>
        <div className="mt-10 grid grid-cols-10 gap-3 border-2 p-4">
          {accomodations.map((a) => (
            <>
              <div className="col-span-3 border-2 p-1">PICTURE</div>
              <div className="col-span-7 border-2 p-1">
                <AccomodationDetails
                  name={a.name}
                  rating={a.rating}
                  ammenities={a.amenities}
                  location={a.location}
                  price={a.price}
                  website={a.website}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AccomodationPage
