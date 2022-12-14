import { navigate, routes } from '@redwoodjs/router'

import IconsGrid from 'src/components/IconsGrid'

const MainAppLayout = ({ children }) => {
  return (
    <div className="relative sticky h-full bg-amber-50 pb-6">
      <div className="flex h-16 justify-between bg-amber-200 p-0">
        <button
          className="my-auto h-full p-4 text-2xl font-semibold hover:text-blue-500"
          onClick={() => navigate(routes.home())}
        >
          WINNIPEG
        </button>
        <IconsGrid isSmall />
      </div>
      {children}
    </div>
  )
}

export default MainAppLayout
