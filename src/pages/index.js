import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../redux/actions/userinfo' 

import HomeHeader from '../components/HomeHeader'
import MyCarousel from '../components/MyCarousel'
import RecommendList from './Home/subPage/RecommendList'
import Ad from './Home/subPage/Ad'

import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false,
            fetchData: '1'
        }
    }
    render() {
        return (
            <div>
                {
                this.state.initDone ?
                <div>
                    <HomeHeader cityName={this.props.userinfo.cityName}></HomeHeader>
                    <MyCarousel>
                    </MyCarousel>
                    <List renderHeader={() => '带副标题'} className="my-list">
                        <Item arrow="horizontal" multipleLine>
                        标题文字 <Brief>副标题</Brief>
                        </Item>
                        <Item arrow="horizontal" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                        标题文字 <Brief>副标题</Brief>
                        </Item>
                    </List>
                    <Ad></Ad>
                    <RecommendList userinfo = {this.props.userinfo}></RecommendList>
                    {/* <City userinfo = {this.props.userinfo}></City> */}
                    {/* hello {this.state.fetchData} */}
                </div>
                :<div>加载中...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取位置信息
        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '北京'
        }
        this.props.userInfoActions.update({
            cityName: cityName
        })

        // 更改状态
        this.setState({
            initDone: true
        })
    }
}

// -------------------redux react 绑定--------------------
function mapStateToProps(state) {
    return {
        userinfo : state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
