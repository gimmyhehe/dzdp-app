import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Grid } from 'antd-mobile';
import AppHeader from '../../components/common/AppHeader'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'
import * as userInfoActionsFromOtherFile from '../../redux/actions/userinfo'
import { withRouter } from 'react-router-dom'
class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data:[{text:"深圳"},{text:"广州"},{text:"北京"}]
        }
    }
    render() {
        return (
            <div>
                {/* <h1>{this.props.userinfo ? this.props.userinfo.cityName : "no cityName"}</h1> */}
                <AppHeader title="选择城市页"></AppHeader>
                <div>{this.props.userinfo.cityName}</div>
                <Grid data={this.state.data} columnNum={3} onClick={this.changeCity.bind(this)} />
            </div>
        )
    }
    changeCity(item) {
        let newCity = item.text
        if (newCity == null) {
            return
        }
        // 修改 redux
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userInfoActions.update(userinfo)

        // 修改 cookie
        localStore.setItem(CITYNAME, newCity)

        // 跳转页面
        this.props.history.push('/')
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default City
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(City))
