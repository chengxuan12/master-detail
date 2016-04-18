/**
 * Created by xuan on 16/4/16.
 */
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
export default class MaRecord extends Component {

    render () {
        const { item,key } = this.props;
        const url='/detail/'+item.id;
        return (
            <li key={key}><Link to={url}>{item.title}</Link></li>
        )
    }
}
