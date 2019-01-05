import React from 'react'
import { Route  } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../redux/actions/userinfo' 

import Home from './Home'
import City from './City'
import HomeHeader from '../components/HomeHeader'
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                this.state.initDone ?
                <div>
                    <HomeHeader cityName={this.props.userinfo.cityName}></HomeHeader>
                    <City userinfo = {this.props.userinfo}></City>
                    <Route exact path="/" component={Home}/>
                    <Route path='/city'  component={City}/>
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
