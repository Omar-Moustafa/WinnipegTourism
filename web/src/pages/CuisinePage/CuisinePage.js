import { CuisineIcon } from 'src/components/Icons/Icons'
import {
  middleEasternCuisines,
  indianCuisines,
  chineseCuisines,
  africanCuisines,
  localCuisines,
} from 'src/mockedData'

const CuisineBox = ({ cuisineType, divId }) => {
  return (
    <button
      className={`mx-auto h-32 w-32 rounded-full border-2 p-2 text-center hover:bg-amber-200`}
      onClick={() => document.getElementById(divId).scrollIntoView()}
    >
      <p className="text-2xl font-semibold">{cuisineType}</p>
    </button>
  )
}

const CuisineDetails = ({ name, topdish, rating, location, website }) => {
  return (
    <div className="grid grid-cols-10 gap-2 text-left">
      <p className="col-span-10 text-left text-xl font-semibold">{name}</p>
      <p className="col-span-2 font-semibold">Topdish:</p>
      <p className="col-span-8">{topdish}</p>
      <p className="col-span-2 font-semibold">Rating:</p>
      <p className="col-span-8">{rating}/5</p>
      <p className="col-span-2 font-semibold">Location:</p>
      <p className="col-span-8">{location}</p>
      <p className="col-span-2 font-semibold">Website:</p>
      <a className="col-span-8 text-blue-500 underline" href={website}>
        {website}
      </a>
    </div>
  )
}

const CuisinePage = () => {
  return (
    <div className="mt-2 w-full">
      <div className="px-20 text-center">
        <CuisineIcon className={'h-32 w-32'} disabled />
        <p className="text-2xl font-bold">Cuisine</p>
        <div className="mt-10 grid grid-cols-5 gap-1 px-40">
          <CuisineBox cuisineType={'Middle Eastern'} divId={'middleEast'} />
          <CuisineBox cuisineType={'African'} divId={'african'} />
          <CuisineBox cuisineType={'Chinese'} divId={'chinese'} />
          <CuisineBox cuisineType={'Indian'} divId={'indian'} />
          <CuisineBox cuisineType={'Local'} divId={'local'} />
        </div>

        <div className="mt-10 grid grid-cols-10 gap-5 border-2 p-4">
          <div
            id="middleEast"
            className="col-span-10 border-2 bg-amber-200 text-4xl font-semibold"
          >
            MIDDLE EASTERN
          </div>
          {middleEasternCuisines.map((c) => (
            <>
              <div className="col-span-3 mt-2 border-2 p-1">
                <img src={c.image} alt={c.name} className="m-auto" />
              </div>
              <div className="col-span-7 mt-2 border-2 p-1">
                <CuisineDetails
                  name={c.name}
                  topdish={c.topdish}
                  rating={c.rating}
                  location={c.location}
                  website={c.website}
                />
              </div>
            </>
          ))}
          <div
            id="indian"
            className="col-span-10 mt-10 border-2 bg-amber-200 text-4xl font-semibold"
          >
            INDIAN
          </div>
          {indianCuisines.map((c) => (
            <>
              <div className="col-span-3 mt-2 border-2 p-1">
                <img src={c.image} alt={c.name} className="m-auto h-64" />
              </div>
              <div className="col-span-7 mt-2 border-2 p-1">
                <CuisineDetails
                  name={c.name}
                  topdish={c.topdish}
                  rating={c.rating}
                  location={c.location}
                  website={c.website}
                />
              </div>
            </>
          ))}
          <div
            id="chinese"
            className="col-span-10 mt-10 border-2 bg-amber-200 text-4xl font-semibold"
          >
            CHINESE
          </div>
          {chineseCuisines.map((c) => (
            <>
              <div className="col-span-3 mt-2 border-2 p-1">
                <img src={c.image} alt={c.name} className="m-auto h-64" />
              </div>
              <div className="col-span-7 mt-2 border-2 p-1">
                <CuisineDetails
                  name={c.name}
                  topdish={c.topdish}
                  rating={c.rating}
                  location={c.location}
                  website={c.website}
                />
              </div>
            </>
          ))}
          <div
            id="african"
            className="col-span-10 mt-10 border-2 bg-amber-200 text-4xl font-semibold"
          >
            AFRICAN
          </div>
          {africanCuisines.map((c) => (
            <>
              <div className="col-span-3 mt-2 border-2 p-1">
                <img src={c.image} alt={c.name} className="m-auto h-64" />
              </div>
              <div className="col-span-7 mt-2 border-2 p-1">
                <CuisineDetails
                  name={c.name}
                  topdish={c.topdish}
                  rating={c.rating}
                  location={c.location}
                  website={c.website}
                />
              </div>
            </>
          ))}
          <div
            id="local"
            className="col-span-10 mt-10 border-2 bg-amber-200 text-4xl font-semibold"
          >
            LOCAL
          </div>
          {localCuisines.map((c) => (
            <>
              <div className="col-span-3 mt-2 border-2 p-1">
                <img src={c.image} alt={c.name} className="m-auto h-64" />
              </div>
              <div className="col-span-7 mt-2 border-2 p-1">
                <CuisineDetails
                  name={c.name}
                  topdish={c.topdish}
                  rating={c.rating}
                  location={c.location}
                  website={c.website}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CuisinePage
