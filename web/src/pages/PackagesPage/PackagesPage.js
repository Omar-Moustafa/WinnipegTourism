import { navigate, routes } from '@redwoodjs/router'

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
          <div className="grid grid-cols-10 gap-2 rounded-lg border-2 p-4 text-lg">
            <div className="col-span-10 flex gap-2">
              <div className="h-6 w-6 rounded-full bg-yellow-500"> </div>
              <span className="mb-2 font-bold text-yellow-500">
                GOLD PACKAGE
              </span>
              <span className="mb-2 self-center text-xs font-bold text-yellow-500">
                (3 days)
              </span>
            </div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <ActivityIcon className={'h-6 w-6'} disabled />
              </div>

              <span> Activity</span>
            </div>
            <div className="col-span-8 text-left">
              Archery, Winnipeg Art Gallery, Explore the forks, Jets Game and
              Thermea
            </div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <CarIcon className={'h-6 w-6 place-self-start'} disabled />
              </div>
              <span> Transportation</span>
            </div>
            <div className="col-span-8 text-left">Car Rental</div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <CuisineIcon className={'h-6 w-6 place-self-start'} disabled />
              </div>
              <span> Resturant</span>
            </div>
            <div className="col-span-8 text-left">
              Mesob Ethopian Eats and Baked expectations
            </div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <HomeIcon className={'h-6 w-6 place-self-start'} disabled />
              </div>
              <span> Accomodation</span>
            </div>
            <div className="col-span-8 text-left">
              Delta Hotels by Marriot Winnipeg
            </div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <TicketIcon className={'h-6 w-6 place-self-start'} disabled />
              </div>
              <span> Price</span>
            </div>
            <div className="col-span-8 text-left font-semibold">
              $599{' '}
              <span className="text-xs text-gray-400 line-through">$699</span>
            </div>
            <div className="col-span-10">
              <button
                onClick={() =>
                  navigate(routes.transaction({ name: 'Gold', price: 599 }))
                }
                className="mr-2 w-48 rounded-lg border-2 bg-amber-200 py-1 px-2 text-lg font-semibold hover:bg-amber-300"
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-10 gap-2 rounded-lg border-2 p-4 text-lg">
            <div className="col-span-10 flex gap-2">
              <div className="h-6 w-6 rounded-full bg-gray-500"> </div>
              <span className="mb-2 font-bold text-gray-500">
                SILVER PACKAGE
              </span>
              <span className="mb-2 self-center text-xs font-bold text-gray-500">
                (2 days)
              </span>
            </div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <ActivityIcon className={'h-6 w-6'} disabled />
              </div>
              <span> Activity</span>
            </div>
            <div className="col-span-8 text-left">
              Axe Throwing, Canadian Museum for human rights, Explore the forks,
              Horseback Riding, Thermea
            </div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <CarIcon className={'h-6 w-6 place-self-start'} disabled />
              </div>
              <span> Transportation</span>
            </div>
            <div className="col-span-8 text-left">Car Rental</div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <CuisineIcon className={'h-6 w-6 place-self-start'} disabled />
              </div>
              <span> Resturant</span>
            </div>
            <div className="col-span-8 text-left">
              Clay Oven and Smokes Poutine
            </div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <HomeIcon className={'h-6 w-6 place-self-start'} disabled />
              </div>
              <span> Accomodation</span>
            </div>
            <div className="col-span-8 text-left">
              Not included in Silver package
            </div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <TicketIcon className={'h-6 w-6 place-self-start'} disabled />
              </div>
              <span> Price</span>
            </div>
            <div className="col-span-8 text-left font-semibold">
              $399{' '}
              <span className="text-xs text-gray-400 line-through">$499</span>
            </div>
            <div className="col-span-10">
              <button
                onClick={() =>
                  navigate(routes.transaction({ name: 'Silver', price: 399 }))
                }
                className="mr-2 w-48 rounded-lg border-2 bg-amber-200 py-1 px-2 text-lg font-semibold hover:bg-amber-300"
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-10 gap-2 rounded-lg border-2 p-4 text-lg">
            <div className="col-span-10 flex gap-2">
              <div className="h-6 w-6 rounded-full bg-stone-500"> </div>
              <span className="mb-2 font-bold text-stone-500">
                BRONZE PACKAGE
              </span>
              <span className="mb-2 self-center text-xs font-bold text-stone-500">
                (1 day)
              </span>
            </div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <ActivityIcon className={'h-6 w-6'} disabled />
              </div>
              <span> Activity</span>
            </div>
            <div className="col-span-8 text-left">
              Archery, Winnipeg Art Gallery, Black Light Mini Golf, Explore
              Forks and Thermea by Nordik Spa - Nature Day
            </div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <CarIcon className={'h-6 w-6 place-self-start'} disabled />
              </div>
              <span> Transportation</span>
            </div>
            <div className="col-span-8 text-left">Car Rental</div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <CuisineIcon className={'h-6 w-6 place-self-start'} disabled />
              </div>
              <span> Resturant</span>
            </div>
            <div className="col-span-8 text-left">
              Not included in Bronze package
            </div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <HomeIcon className={'h-6 w-6 place-self-start'} disabled />
              </div>
              <span> Accomodation</span>
            </div>
            <div className="col-span-8 text-left">
              Not included in Bronze package
            </div>
            <div className="col-span-2 flex gap-2 text-left">
              <div>
                <TicketIcon className={'h-6 w-6 place-self-start'} disabled />
              </div>
              <span> Price</span>
            </div>
            <div className="col-span-8 text-left font-semibold">
              $299{' '}
              <span className="text-xs text-gray-400 line-through">$349</span>
            </div>
            <div className="col-span-10">
              <button
                className="mr-2 w-48 rounded-lg border-2 bg-amber-200 py-1 px-2 text-lg font-semibold hover:bg-amber-300"
                onClick={() =>
                  navigate(routes.transaction({ name: 'Bronze', price: 299 }))
                }
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackagesPage
