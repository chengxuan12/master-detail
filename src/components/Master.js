/**
 * Created by xuan on 16/4/15.
 */
import React, { Component, PropTypes } from 'react'
import MaRecord from './MaRecord'
import SiderBar from './SiderBar'
export default class Master extends Component {

    componentDidMount() {
        console.log('componentDidMount Master');
        this.goFetch();

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.params.page!=this.props.params.page){
            const {fetchMaster,totalPage} = this.props;
            this.goFetch(nextProps.params.page);
        }
    }
    componentDidUpdate(prevProps){
        console.log('componentDidUpdate Master')
        const {fetchMaster,totalPage} = this.props;
        var page = this.props.params.page==undefined?1:this.props.params.page;
        if($(".tcdPageCode").html()==""||this.props.params.page==undefined||prevProps.params.page!=this.props.params.page){
            console.log('render createPage')
            $(".tcdPageCode").createPage({
                pageCount: parseInt(totalPage),
                current: parseInt(page),
                backFn: function (page) {
                    const path = `/master/${page}`
                    this.context.router.push(path)
                }.bind(this)
            });
        }
    }
    goFetch(page){
        const {fetchMaster,receiveMaster,list,hadFetch} = this.props;
        if(page==undefined&&this.props.params.page==undefined){
            page=1;
        }else if(page==undefined&&this.props.params.page!=undefined){
            page=this.props.params.page;
        }else {
            page=page;
        }
        if(hadFetch==true){
            receiveMaster(list,page)
        }else {
            fetchMaster(page)
        }
    }
    render () {
        const {items} = this.props
        return (
            <div className="main-box master">
                <div className="cont-box">
                    {items!=undefined && items.length === 0 &&
                    <h2>Loading...</h2>
                    }
                    {items!=undefined && items.length > 0 && items[0]!=undefined &&
                    <div>
                        <ul>
                            {items.map((item, i) =>
                                <MaRecord item={item}  key={i}/>
                            )}
                        </ul>
                        <div className="tcdPageCode"></div>
                    </div>

                    }
                </div>
                <SiderBar />
            </div>
        )
    }
}
Master.propTypes = {
    fetchMaster: PropTypes.func.isRequired
};
Master.contextTypes={
    router: React.PropTypes.object
}