import React from 'react'
import { HashRouter as Router, Route, Switch  } from "react-router-dom";

import App from '../pages'
import City from '../pages/City'
import NotFound from '../pages/404'
// import User from '../pages/User'
// import Search from '../pages/Search'
// import Detail from '../pages/Detail'
// import NotFound from '../pages/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        const Home = () => <div>Home</div>;
        return (
            <Router>
              <Switch>
                <Route path='/' exact component={App}/>
                <Route path='/city' exact component={City}/>
                <Route path="/test1" exact render={(props) => {
                    return(
                        <div>
                            <Route path='/test1/tohome' exact render={props=>(<div>jflaskjflasjfd</div>)}></Route>
                            <Route path='/test1/aa' exact component={Home}></Route>
                        </div>
                        )
                    }} />
                <Route path='*' component={NotFound}/>
              </Switch>  
            </Router>
        )
    }
}

export default RouterMap
