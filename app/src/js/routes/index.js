import React from 'react'
import { Route } from 'react-router'
import { Ui, Child } from '../components'

export default (
  <Route path="/" component={Ui}>
    <Route path="child" component={Child}></Route>
  </Route>
)