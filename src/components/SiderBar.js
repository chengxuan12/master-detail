/**
 * Created by xuan on 16/4/17.
 */
import React, { Component, PropTypes } from 'react'

export default class SiderBar extends Component {

    render () {
        return (
            <div className="sider-box">
                <div className="sider-img"></div>
                <div className="sider-head"></div>
                <div className="author">程轩</div>
                <div className="bounceIn sider-content">
                    <div className="introduction">项目简介</div>
                    <div className="int-content">
                         本例子以ES6标准,babel版本6.使用主要的是react+redux+router框架模式,使用webpack进行打包管理
                    </div>
                </div>
            </div>
        )
    }
}
