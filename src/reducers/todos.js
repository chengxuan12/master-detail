/**
 * Created by xuan on 16/4/16.
 */
import {RECEIVE_Master,RECEIVE_Detail,INVALIDATE_Detail} from '../actions/todos'
//reducer其实也是个方法而已,参数是state和action,返回值是新的state

const initialState = {
    item: {},
    list:[],
    items: [],
    totalPage:1,
    hadFetch:false
}

export default function todos(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_Master:
            return Object.assign({}, state, {
                items: action.items,
                totalPage:action.totalPage,
                list:action.list,
                hadFetch:action.hadFetch
            })
        case RECEIVE_Detail:
            return Object.assign({}, state, {
                item: action.item
            })
        case INVALIDATE_Detail:
            return Object.assign({}, state, {
                item: {content:''}
            })
        default:
            return state
    }
}