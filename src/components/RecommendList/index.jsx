import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class RecommendList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
              this is RecommendList!
            </div>
        )
    }
}

export default RecommendList