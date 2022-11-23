import {
  ActivityIcon,
  CuisineIcon,
  HomeIcon,
  CarIcon,
  TicketIcon,
  FAQIcon,
} from 'src/components/Icons/Icons'

const IconsGrid = ({ isSmall = false }) => {
  return (
    <div className="my-auto mx-4 grid h-full grid-cols-6 gap-5">
      <ActivityIcon className={isSmall ? 'h-10' : 'h-24'} />
      <CuisineIcon className={isSmall ? 'h-10' : 'h-24'} />
      <HomeIcon className={isSmall ? 'h-10' : 'h-24'} />
      <CarIcon className={isSmall ? 'h-10' : 'h-24'} />
      <TicketIcon className={isSmall ? 'h-10' : 'h-24'} />
      <FAQIcon className={isSmall ? 'h-10' : 'h-24'} />
    </div>
  )
}

export default IconsGrid
