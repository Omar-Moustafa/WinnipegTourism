import IconsGrid from 'src/components/IconsGrid'

const HomePage = () => {
  return (
    <div className="h-screen bg-amber-100">
      <div className="my-auto grid h-full grid-cols-12">
        <div className="col-span-1 my-auto grid h-10 w-full rotate-[-90deg] text-5xl font-semibold">
          WINNIPEG
        </div>
        <div className="col-span-11">
          <IconsGrid />
        </div>
      </div>
    </div>
  )
}

export default HomePage
