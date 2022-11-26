import { ActivityIcon } from 'src/components/Icons'
import { summerActivites, winterActivities } from 'src/mockedData'

const ActivityBox = ({ ActivityType, divId }) => {
  return (
    <button
      className={`mx-auto h-24 w-24 rounded-full border-2 p-2 text-center hover:bg-amber-200`}
      onClick={() => document.getElementById(divId).scrollIntoView()}
    >
      <p className="text-sm font-semibold">{ActivityType}</p>
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
    <div className="grid grid-cols-10 text-left">
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
  return (
    <>
      <div className="w-full">
        <div className="px-20 text-center">
          <ActivityIcon className={'h-32 w-32'} disabled />
          <p className="text-2xl font-bold">ACTIVITIES</p>
          <div className="mx-auto mt-10 grid w-64 grid-cols-2 gap-1">
            <ActivityBox ActivityType={'Summer'} divId={'summer'} />
            <ActivityBox ActivityType={'Winter'} divId={'winter'} />
          </div>
        </div>
      </div>

      <div className="mx-20 mt-10 grid grid-cols-10 gap-3 border-2 p-4">
        <div
          id="summer"
          className="col-span-10 border-2 bg-amber-200 text-center font-bold"
        >
          SUMMER
        </div>
        {summerActivites.map((c) => (
          <>
            <div className="col-span-3 border-2 p-1">PICTURE</div>
            <div className="col-span-7 border-2 p-1">
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
          className="col-span-10 mt-10 border-2 bg-amber-200 text-center font-bold"
        >
          WINTER
        </div>
        {winterActivities.map((c) => (
          <>
            <div className="col-span-3 border-2 p-1">PICTURE</div>
            <div className="col-span-7 border-2 p-1">
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
