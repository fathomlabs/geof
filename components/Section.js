import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Styles from './Styles'

class AutoComplete extends Component {
  render () {
    return (
      <View style={this.props.style}>
        <Text style={this.props.titleStyle}>
          {this.props.title}
        </Text>
        <View style={this.props.containerStyle}>
          {React.Children}
        </View>
      </View>
    )
  }
}

AutoComplete.propTypes = {
  title: PropTypes.string,
  style: PropTypes.any,
  titleStyle: PropTypes.any,
  containerStyle: PropTypes.any
}

export default AutoComplete
