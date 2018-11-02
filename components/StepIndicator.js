import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'
import { ViewPager } from 'rn-viewpager'

import StepIndicator from 'react-native-step-indicator'
import MaterialIcons from '@expo/vector-icons'

const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
    const iconConfig = {
      name: 'feed',
      color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
      size: 15,
    }
    switch (position) {
      case 0: {
        iconConfig.name = 'shopping-cart'
        break
      }
      case 1: {
        iconConfig.name = 'location-on'
        break
      }
      case 2: {
        iconConfig.name = 'assessment'
        break
      }
      case 3: {
        iconConfig.name = 'payment'
        break
      }
      case 4: {
        iconConfig.name = 'track-changes'
        break
      }
      default: {
        break
      }
    }
    return iconConfig
  }

export default class App extends Component {

  constructor () {
    super()
    this.state = {
      currentPage: 0
    }
  }

  async componentWillMount() {
    try {
      await Font.loadAsync({
        MaterialIcons
      })

      this.setState({
        fontLoaded: true
      })
    } catch (error) {
      console.log('error loading icon fonts', error);
    }
  }

  componentWillReceiveProps (nextProps,nextState) {
    if ((nextState.currentPage != this.state.currentPage) && this.viewPager) {
      this.viewPager.setPage(nextState.currentPage)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator customStyles={firstIndicatorStyles} currentPosition={this.state.currentPage} labels={['Age?', 'Pregnant?', 'Fish type?', 'Fish size ?', 'Location?']} />
        </View>
        <ViewPager
          style={{flexGrow:1}}
          ref={(viewPager) => {this.viewPager = viewPager}}
          onPageSelected={(page) => {this.setState({currentPage:page.position})}}
        >
        {PAGES.map((page) => this.renderViewPagerPage(page))}
        </ViewPager>
      </View>
    )
  }

  renderViewPagerPage = (data) => {
    return(<View style={styles.page}>
      <Text>{data}</Text>
    </View>)
  }

  renderStepIndicator = params => {}
    // <MaterialIcon {...getStepIndicatorIconConfig(params)} />
  // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical:50,
  },
  page: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

// const labels = ['Age?', 'Pregnant?', 'Fish type?', 'Fish size ?', 'Location?']
const PAGES = ['hello', 'hi', 'oh hey']
const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#a4d4a5',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#a4d4a5',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f'
}