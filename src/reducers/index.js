/**
 * Created by xuan on 16/4/15.
 */
import { combineReducers } from 'redux'
import todos from './todos'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    todos
})

export default rootReducer