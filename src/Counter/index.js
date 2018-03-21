import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './duck/action'
import styles from './styles'

const mapStateToProps = (state, props) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

class Counter extends Component {
  render() {
    const { counter } = this.props
    return (
      <View style={styles.container}>
        <Text>Clicked: {counter} times </Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.props.increment}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.props.decrement}
          >
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
