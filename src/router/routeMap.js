import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from '../pages'
import City from '../pages/City'
// import User from '../pages/User'
// import Search from '../pages/Search'
// import Detail from '../pages/Detail'
// import NotFound from '../pages/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router>
              <div>
                <Route path='/' component={App}>
                </Route>
                <Route path='/tohome' component={City}>
                </Route>
              </div>  
            </Router>
        )
    }
}

export default RouterMap
