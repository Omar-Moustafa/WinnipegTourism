import { useEffect, useState } from 'react'

import { HomeIcon } from 'src/components/Icons/Icons'
import { accomodations as acc } from 'src/mockedData'
const AccomodationDetails = ({
  name,
  rating,
  location,
  ammenities,
  price,
  website,
}) => {
  return (
    <div className="grid grid-cols-10 gap-2 px-2 text-left">
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
  const [accomodations, setAcc] = useState(acc)
  const [searchTerm, setSearchTerm] = useState('')
  const [sorted, setSorted] = useState(false)

  useEffect(() => {
    if (sorted) {
      accomodations.sort((a, b) =>
        parseInt(a.price) > parseInt(b.price) ? 1 : -1
      )
      setAcc([])
    }
  }, [sorted, setSorted, accomodations])

  useEffect(() => {
    {
      if (searchTerm == '') {
        setAcc(acc)
        return
      }
      const filtered = []
      const searchFilter = (i) => {
        if (i?.name?.toLowerCase().includes(searchTerm.toLowerCase())) {
          console.log(i.type)
          filtered.push(i)
        }
      }
      acc.filter(searchFilter)
      setAcc(filtered)
    }
  }, [searchTerm, accomodations])

  return (
    <div className="w-full">
      <div className="px-20 text-center">
        <HomeIcon className={'h-32 w-32'} disabled />
        <p className="text-2xl font-bold">Accomodation</p>
        <input
          type="text"
          className="mt-2 w-64 border-2 px-2 py-1"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target?.value)}
        />
        <button
          className="ml-2 rounded-lg bg-amber-400 p-2 hover:bg-amber-500"
          onClick={() => setSorted(true)}
        >
          Sort by Price
        </button>
        <div className="mt-5 grid grid-cols-10 gap-5 border-2 p-4">
          {accomodations.map((a) => (
            <>
              <div className="col-span-3 border-2 p-1">
                <img src={a.image} alt={a.name} />
              </div>
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
