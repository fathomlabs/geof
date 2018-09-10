




// DELETE THIS




import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import geolib from 'geolib';
import data from '../lib/datajs';
import AutoComplete from './AutoComplete';
// import ModalDropdown from 'react-native-modal-dropdown';

export default class GetLocation extends Component {
  // state = {
  //   location: null,
  //   errorMessage: null,
  //   lake: { value: '', selected: null },
  // };

  constructor(props) {
    super(props);
    this.state = {
      location: null,
      errorMessage: null,
      // lake: { value: '', selected: null },
    };
  }


  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };


  closestLakes = (lakes) => {
    let text = 'Waiting..';
    let closest = [];
    // let lakes = [];
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {

      let our_location = this.state.location.coords;
      // lakes = data.wbs;

      for (var lake of lakes) {
        let lake_latitude = lake.lat;
        let lake_longitude = lake.long;

        let distance = geolib.getDistance(our_location, {
          latitude: lake_latitude,
          longitude: lake_longitude
        });

        lake.distance = distance;
      }

      // FIXME: need to return the lake ID as well (matching the original data structure)

      closest = lakes.sort((a, b) => a.distance - b.distance).slice(0,4);
      // text = "The nearest 5 lakes are: " + JSON.stringify(closest);
      console.log("closest: %o", closest);
      console.log("state: %o", this.state);
      this.setState({closest});
    }


    return true;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

module.exports = GetLocation;