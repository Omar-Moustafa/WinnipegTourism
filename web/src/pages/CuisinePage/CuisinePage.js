import { CuisineIcon } from 'src/components/Icons/Icons'

const CuisineBox = ({ cuisineType, colSpan }) => {
  return (
    <button
      className={`mx-auto w-full rounded-lg border-2 p-2 text-center hover:bg-amber-200 ${colSpan}`}
    >
      <p className="text-sm font-semibold">{cuisineType}</p>
    </button>
  )
}

const CuisinePage = () => {
  return (
    <div className="w-full">
      <div className="text-center">
        <CuisineIcon className={'h-32 w-32'} />
        <p className="text-2xl font-bold">Cuisine</p>
        <div className="mt-10 grid grid-cols-6 gap-6 px-24">
          <CuisineBox cuisineType={'Middle Eastern'} colSpan={'col-span-3'} />
          <CuisineBox cuisineType={'African'} colSpan={'col-span-3'} />
          <CuisineBox cuisineType={'Chinese'} colSpan={'col-span-2'} />
          <CuisineBox cuisineType={'Indian'} colSpan={'col-span-2'} />
          <CuisineBox cuisineType={'Local'} colSpan={'col-span-2'} />
        </div>
      </div>
    </div>
  )
}

export default CuisinePage
