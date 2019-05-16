import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/**
 * Components
 */
import Footer from '../components/Footer'

/**
 * pages
 */
import Main from '../pages/main'

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
)

export default Routes
