import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {ActivityIcon,CuisineIcon,HomeIcon,CarIcon,TicketIcon,FAQIcon} from 'src/components/Icons/Icons'

const HomePage = () => {
  return (
    <div className='h-screen'>
    <div className='grid grid-cols-12 h-full my-auto'>
      <div className='grid col-span-1 text-5xl font-semibold my-auto rotate-[-90deg]'>
        WINNIPEG
      </div>
      <div className='h-full grid grid-cols-6 my-auto col-span-11'>
        <ActivityIcon/>
        <CuisineIcon/>
        <HomeIcon/>
        <CarIcon/>
        <TicketIcon/>
        <FAQIcon/>
      </div>
    </div>

    </div>
  )
}

export default HomePage

/* <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p> */
