/**
 * Created by xuan on 16/4/15.
 */
import React from 'react'
import { Route } from 'react-router'

import App from './containers/App'
import Master from './containers/Master'
import Detail from './containers/Detail'

export default (
    <Route component={App}>
        <Route path="/" component={Master} />
        <Route path="/master/:page" component={Master} />
        <Route path="/detail/:id" component={Detail} />
    </Route>
)
