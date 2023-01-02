import { useEffect, useState } from 'react'

import { ActivityIcon } from 'src/components/Icons'
import { summerActivites as sum, winterActivities } from 'src/mockedData'

const ActivityBox = ({ ActivityType, divId }) => {
  return (
    <button
      className={`mx-auto h-32 w-32 rounded-full border-2 p-2 text-center hover:bg-amber-200`}
      onClick={() => document.getElementById(divId).scrollIntoView()}
    >
      <p className="text-2xl font-semibold">{ActivityType}</p>
    </button>
  )
}

const ActivitiesDetails = ({
  name,
  duration,
  description,
  location,
  price,
  website,
}) => {
  return (
    <div className="grid grid-cols-10 gap-2 text-left">
      <p className="col-span-10 text-left text-lg font-semibold">{name}</p>
      <p className="col-span-2 font-semibold">Duration:</p>
      <p className="col-span-8">{duration}</p>
      <p className="col-span-2 font-semibold">Description:</p>
      <p className="col-span-8">{description}</p>
      <p className="col-span-2 font-semibold">Location:</p>
      <p className="col-span-8">{location}</p>
      <p className="col-span-2 font-semibold">Price:</p>
      <p className="col-span-8">{price}</p>
      <p className="col-span-2 font-semibold">Website:</p>
      <a className="col-span-8 text-blue-500 underline" href={website}>
        {website}
      </a>
    </div>
  )
}

const ActivitiesPage = () => {
  const [summerActivites, setSum] = useState(sum)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    {
      if (searchTerm == '') {
        setSum(sum)
        return
      }
      const filtered = []
      const searchFilter = (i) => {
        if (i?.name?.toLowerCase().includes(searchTerm.toLowerCase())) {
          console.log(i.type)
          filtered.push(i)
        }
      }
      sum.filter(searchFilter)
      setSum(filtered)
    }
  }, [searchTerm])
  return (
    <>
      <div className="mt-2 w-full">
        <div className="px-20 text-center">
          <ActivityIcon className={'h-32 w-32'} disabled />
          <p className="text-2xl font-bold">ACTIVITIES</p>
          <input
            type="text"
            className="mt-2 w-64 border-2 px-2 py-1"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target?.value)}
          />
          <div className="mx-auto mt-5 grid w-96 grid-cols-2 gap-1">
            <ActivityBox ActivityType={'Summer'} divId={'summer'} />
            <ActivityBox ActivityType={'Winter'} divId={'winter'} />
          </div>
        </div>
      </div>

      <div className="mx-20 mt-10 grid grid-cols-10 gap-5 border-2 p-4">
        <div
          id="summer"
          className="col-span-10 border-2 bg-amber-200 text-center text-4xl font-semibold"
        >
          SUMMER
        </div>
        {summerActivites.map((c) => (
          <>
            <div className="col-span-3 mt-2 border-2 p-1">
              <img src={c.image} alt={c.name} className="m-auto" />
            </div>
            <div className="col-span-7 mt-2 border-2 p-1">
              <ActivitiesDetails
                name={c.name}
                duration={c.duration}
                description={c.description}
                location={c.location}
                price={c.price}
                website={c.website}
              />
            </div>
          </>
        ))}

        <div
          id="winter"
          className="col-span-10 mt-10 border-2 bg-amber-200 text-center text-2xl font-semibold"
        >
          WINTER
        </div>
        {winterActivities.map((c) => (
          <>
            <div className="col-span-3 mt-2 border-2 p-1">
              <img src={c.image} alt={c.name} className="m-auto" />
            </div>
            <div className="col-span-7 mt-2 border-2 p-1">
              <ActivitiesDetails
                name={c.name}
                duration={c.duration}
                description={c.description}
                location={c.location}
                price={c.price}
                website={c.website}
              />
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default ActivitiesPage
