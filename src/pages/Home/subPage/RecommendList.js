import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import RecommendList from '../../../components/List/index'
import LoadMore from '../../../components/LoadMore/index'
import { getListData } from '../../../fetch/home/home'
import './style.less'
class Ad extends React.Component{
  constructor(prop,context){
    super(prop,context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 0,
      cityName : this.props.userinfo.cityName
    }
  }
  render(){
    return(
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        <RecommendList data={this.state.data}></RecommendList>
        {
          this.state.hasMore
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
          : ''
        }
      </div>
    )
  }
  componentDidMount() {
    this.getRecommendList(this.cityName,0)
  }
  //获取猜你喜欢的数据信息
  getRecommendList(cityName,page){
    getListData(cityName,page).then((res)=>{
      return res.json()
    }).then(json=>{
      this.setState({
        data:this.state.data.concat(json.data),
        hasMore:json.hasMore
      })
    }).catch(ex => {
          console.error('首页”猜你喜欢“获取数据报错, ', ex.message)
  })
  }
  loadMoreData() {
    // 记录状态
    this.setState({
        isLoadingMore: true
    })

    const cityName = this.props.cityName
    const page = this.state.page
    const result = getListData(cityName, page)
    this.getRecommendList(result)

    // 增加 page 技术
    this.setState({
        page: page + 1,
        isLoadingMore: false
    })
  }
}
export default Ad