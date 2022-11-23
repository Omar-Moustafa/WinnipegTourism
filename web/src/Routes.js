// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import MainAppLayout from 'src/layouts/MainAppLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainAppLayout}>
        <Route path="/faq" page={FAQPage} name="faq" />
      </Set>

      <Route path="/home" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
