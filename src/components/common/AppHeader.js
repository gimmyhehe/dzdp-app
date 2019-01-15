import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { NavBar, Icon } from 'antd-mobile';

export default class AppHeaer extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return(
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={this.backToPreviousPage.bind(this)}>
        {this.props.title ? this.props.title : 'default title'}
      </NavBar>
    )
  }
  backToPreviousPage(){
    window.history.back()
  }
}