/**
 * Created by xuan on 16/4/15.
 */
import React, { Component, PropTypes } from 'react'
import SiderBar from './SiderBar'
export default class Detail extends Component {

    componentWillMount() {
        const {invalidate} = this.props;
        invalidate();
    }

    componentDidMount() {
        const {fetchDetail} = this.props;
        const { id } = this.props.params;
        fetchDetail(id)
    }

    //嵌入Detail内容
    createMarkup(item) {
        if(item!=undefined&&item!=null){
            return {__html: item.content};
        }else {
            return {__html: ''};
        }
    };
    render () {
        const { item } = this.props;
        return (
        <div className="main-box detail">
            <div className="cont-box" dangerouslySetInnerHTML={this.createMarkup(item)} ></div>
            <SiderBar />
        </div>

        )
    }
}
Detail.propTypes = {
    fetchDetail:PropTypes.func.isRequired,
    invalidate:PropTypes.func.isRequired
};
