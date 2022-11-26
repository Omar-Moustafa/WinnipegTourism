import IconsGrid from 'src/components/IconsGrid'

const HomePage = () => {
  return (
    <div className="h-screen bg-amber-100">
      <div className="absolute mt-24 w-full text-center text-7xl font-semibold">
        WINNIPEG
      </div>
      <div className="my-auto h-full">
        <IconsGrid />
      </div>
    </div>
  )
}

export default HomePage
