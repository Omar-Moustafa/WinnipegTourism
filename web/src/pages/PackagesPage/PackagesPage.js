import {
  TicketIcon,
  ActivityIcon,
  CuisineIcon,
  CarIcon,
  HomeIcon,
} from 'src/components/Icons/Icons'

const PackagesPage = () => {
  return (
    <div className="w-full">
      <div className="px-20 text-center">
        <TicketIcon className={'h-32 w-32'} disabled />
        <p className="text-2xl font-bold">Packages</p>
        <div className="mt-10">
          <div className="grid grid-cols-10 gap-2 rounded-lg border-2 p-4">
            <div className="col-span-10 flex gap-2">
              <div className="h-6 w-6 rounded-full bg-yellow-500"> </div>
              <span className="font-bold text-yellow-500">GOLD PACKAGE</span>
            </div>
            <div className="col-span-2 text-left">
              <ActivityIcon className={'h-6 w-6'} disabled />
              <span> Activity</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
            <div className="col-span-2 text-left">
              <CarIcon className={'h-6 w-6 place-self-start'} disabled />
              <span> Transportation</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
            <div className="col-span-2 text-left">
              <CuisineIcon className={'h-6 w-6 place-self-start'} disabled />
              <span> Resturant</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
            <div className="col-span-2 text-left">
              <HomeIcon className={'h-6 w-6 place-self-start'} disabled />
              <span> Accomodation</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
            <div className="col-span-2 text-left">
              <TicketIcon className={'h-6 w-6 place-self-start'} disabled />
              <span> Price</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
          </div>
          <div className="mt-4 grid grid-cols-10 gap-2 rounded-lg border-2 p-4">
            <div className="col-span-10 flex gap-2">
              <div className="h-6 w-6 rounded-full bg-gray-500"> </div>
              <span className="font-bold text-gray-500">SILVER PACKAGE</span>
            </div>
            <div className="col-span-2 text-left">
              <ActivityIcon className={'h-6 w-6'} disabled />
              <span> Activity</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
            <div className="col-span-2 text-left">
              <CarIcon className={'h-6 w-6 place-self-start'} disabled />
              <span> Transportation</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
            <div className="col-span-2 text-left">
              <CuisineIcon className={'h-6 w-6 place-self-start'} disabled />
              <span> Resturant</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
            <div className="col-span-2 text-left">
              <HomeIcon className={'h-6 w-6 place-self-start'} disabled />
              <span> Accomodation</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
            <div className="col-span-2 text-left">
              <TicketIcon className={'h-6 w-6 place-self-start'} disabled />
              <span> Price</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-10 gap-2 rounded-lg border-2 p-4">
            <div className="col-span-10 flex gap-2">
              <div className="h-6 w-6 rounded-full bg-stone-500"> </div>
              <span className="font-bold text-stone-500">BRONZE PACKAGE</span>
            </div>
            <div className="col-span-2 text-left">
              <ActivityIcon className={'h-6 w-6'} disabled />
              <span> Activity</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
            <div className="col-span-2 text-left">
              <CarIcon className={'h-6 w-6 place-self-start'} disabled />
              <span> Transportation</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
            <div className="col-span-2 text-left">
              <CuisineIcon className={'h-6 w-6 place-self-start'} disabled />
              <span> Resturant</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
            <div className="col-span-2 text-left">
              <HomeIcon className={'h-6 w-6 place-self-start'} disabled />
              <span> Accomodation</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
            <div className="col-span-2 text-left">
              <TicketIcon className={'h-6 w-6 place-self-start'} disabled />
              <span> Price</span>
            </div>
            <div className="col-span-8 text-left">FILL</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackagesPage
