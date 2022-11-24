import IconsGrid from 'src/components/IconsGrid'

const MainAppLayout = ({ children }) => {
  return (
    <div className="h-screen bg-amber-50">
      <div className="flex h-16 justify-between bg-amber-200">
        <h1 className="my-auto h-full p-3.5 text-2xl font-semibold">
          WINNIPEG
        </h1>
        <IconsGrid isSmall />
      </div>
      {children}
    </div>
  )
}

export default MainAppLayout
