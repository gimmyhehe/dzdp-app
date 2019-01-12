import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/index'
import { getAdData } from '../../../fetch/home/home'

class Ad extends React.Component{
  constructor(prop,context){
    super(prop,context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data:[]
    }
  }
  render(){
    return(
      <div>
        <HomeAd data={this.state.data}></HomeAd>
      </div>
    )
  }
  componentDidMount() {
    // 获取广告数据
    const result = getAdData()
    result.then(res => {
        return res.json()
    }).then(json => {
        // 处理获取的数据
        const data = json
        if (data.length) {
            this.setState({
                data: data
            })
        }
    }).catch(ex => {
        // 发生错误
            console.error('首页广告模块获取数据报错, ', ex.message)
    })
  }
}
export default Ad