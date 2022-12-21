// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'
import CreateOrder from './components/CreateOrder'
import DeleteOrder from './components/DeleteOrder'
import NavOrder from './components/NavOrder'
import UpdateOrder from './components/UpdateOrder'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={NavOrder} name="about" />
      <Route path="/create" page={CreateOrder} name="about" />
      <Route path="/update" page={UpdateOrder} name="update" />
      <Route path="/delete" page={DeleteOrder} name="delete" />
    </Router>
  )
}

export default Routes
