/**
 * Created by xuan on 16/4/15.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import { Router, browserHistory } from 'react-router'
require('!style!css!../public/css/bootstrap.min.css')
require('!style!css!../public/css/animate.css')
require('!style!css!../public/css/page.css')
require('!style!css!../public/css/default.css')

require('imports?$=jquery!../public/js/jquery.page');
require('imports?$=jquery!../public/js/plugins');
/*eslint-enable*/


ReactDOM.render(
<Root history={browserHistory} />,
    document.getElementById('root')
)