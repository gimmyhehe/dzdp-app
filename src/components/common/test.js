import React from 'react'

class Test extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
        console.log(props)
    }
    render() {
        return (
            <div>
                <span>this is test</span>
            </div>
        )
    }
}

export default Test
