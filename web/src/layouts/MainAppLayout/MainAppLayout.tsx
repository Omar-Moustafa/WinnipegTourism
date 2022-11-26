import IconsGrid from 'src/components/IconsGrid'

const MainAppLayout = ({ children }) => {
  return (
    <div className="h-full bg-amber-50 pb-6">
      <div className="flex h-16 justify-between">
        <h1 className="my-auto h-full p-4 text-2xl font-semibold">WINNIPEG</h1>
        <IconsGrid isSmall />
      </div>
      {children}
    </div>
  )
}

export default MainAppLayout
