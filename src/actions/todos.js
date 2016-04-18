/**
 * Created by xuan on 16/4/16.
 */
import fetch from 'isomorphic-fetch'

export const RECEIVE_Master = 'RECEIVE_Master';
export const RECEIVE_Detail = 'RECEIVE_Detail';
export const INVALIDATE_Detail='INVALIDATE_Detail'
export const Per_Count=12;

//获取Master数据成功的action
export function receiveMaster(data,page) {

    //由于接口参数限制(无总条数),前端分页取到的items
    const items=data.slice((page-1)*Per_Count,page*Per_Count)
    const totalPage=Math.ceil(data.length / Per_Count)
    return {
        type: RECEIVE_Master,
        items: items,
        totalPage:totalPage,
        list:data,
        hadFetch:true
    }
}

//获取Detail数据成功的action
export function receiveDetail(data) {
    return {
        type: RECEIVE_Detail,
        item: data
    }
}

//废弃旧Detail的action
export function invalidate() {
    return {
        type: INVALIDATE_Detail
    }
}

//获取Master数据,完成后触发receivePosts获取成功的action
export  function fetchMaster(page) {

    //const url=`https://cnodejs.org/api/v1/topics?page=${page}'&limit=${Per_Count}`; 由于接口参数限制(无总条数),不使用这个url
    const url=`https://cnodejs.org/api/v1/topics`;
    return dispatch => {
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveMaster(json.data,page)))
    }
}

//获取Detail数据,完成后触发receivePost获取成功的action
export  function fetchDetail(id) {

    const url=`https://cnodejs.org/api/v1/topic/${id}`
    return dispatch => {
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveDetail(json.data)))
    }
}
