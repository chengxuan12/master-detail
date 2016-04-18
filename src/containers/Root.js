/**
 * Created by xuan on 16/4/15.
 */
import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import configureStore from '../store/configureStore'
import routes from '../routes'
/*eslint-enable*/

const initialState = {
            item: {},
            list:[],
            items: [],
            totalPage:1,
            hadFetch:false
        }
const store = configureStore(initialState)

export function createElements (history) {
    const elements = [
        <Router key="router" history={history} children={routes} />
    ]
    return elements
}

export default class Root extends Component {

    /* 放在这位置出错. 看了一些其他demo是可以的,能解释下吗?
    static propTypes = {
        history: PropTypes.object.isRequired
    }
    */

    render () {
        return (
            <Provider store={store} key="provider">
                <div>
                    {createElements(this.props.history)}
                </div>
            </Provider>
        )
    }
}
Root.propTypes = {
    history: PropTypes.object.isRequired
}
