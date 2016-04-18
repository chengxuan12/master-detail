/**
 * Created by xuan on 16/4/15.
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Master from '../components/Master'
import * as TodoActions from '../actions/todos'


function mapStateToProps(state) {
    const { todos } = state;
    return {
        items: todos.items,
        totalPage:todos.totalPage,
        list:todos.list,
        hadFetch:todos.hadFetch
    }
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(TodoActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Master)