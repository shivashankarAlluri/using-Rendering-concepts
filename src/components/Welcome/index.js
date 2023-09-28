import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {states: 0}

  Click = () => {
    this.setState(prevState => ({states: prevState.states + 1}))
  }

  render() {
    let Value = ''
    const {states} = this.state
    if (states % 2 === 0) {
      Value = 'Subscribe'
    } else {
      Value = 'Subscribed'
    }
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Welcome</h1>
          <p className="paragraph">Thank you! Happy Learning</p>
          <button type="button" className="button" onClick={this.Click}>
            {Value}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
