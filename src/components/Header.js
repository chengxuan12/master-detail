/**
 * Created by xuan on 16/4/17.
 */
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


export default class MaRecord extends Component {

    componentDidMount() {
       jQuery('#note').airport([ "React","ReactRouter","Redux","Webpack","Node","Express" ]);
    }
    render () {
        return (
            <div className="cx-container">
                <Link to='/' className="cx-a-logo"><div className="cx-logo"></div></Link>
                <div id="note" className="cx-note"></div>
            </div>
        )
    }
}
