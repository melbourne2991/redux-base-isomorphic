import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TestActions } from '../actions'

class Ui extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { actions, test } = this.props

    return (
      <div>
        <button onClick={() => actions.increment()}>Increment</button>
        <button onClick={() => actions.decrement()}>Deccrement</button>
        <div>{ test.count }</div>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    test: state.test
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TestActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ui)