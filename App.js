import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Picker, Switch, Button } from 'react-native';
import { Constants, Font } from 'expo';
import { Formik } from 'formik';
import  data  from './assets/datajs';
import SearchBar from 'react-native-searchbar';

import ModalDropdown from 'react-native-modal-dropdown';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

// var data = require('./assets/data-tiny');
console.log(data)
// const lakes = [{label: 'ontario', value: 'o'}, {label: 'minneawkas',  value: 'm'}, {label: 'wannsee', value:'w'}];
const lakes2 = Object.entries(data.wbs).map(value => value[1].en)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      under15: ['yes', 'no'],
      pregnant: props.pregnant,
      sp: null
    };
  }

  async componentDidMount() {
    await Font.loadAsync(require('./lib/fonts'));

    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? (
      <View style={styles.container}>
        <Text style={styles.title}>GEOF: Guide To Eating Ontario Fish</Text>
        <Formik
          initialValues={{ firstName: '' }}
          onSubmit={values => console.log(values)}>
          {({ handleChange, handleSubmit, values }) => (
            <View>
              <SearchBar
                ref={(ref) => this.searchBar = ref}
                data={lakes2}
                handleResults={this._handleResults}
                showOnLoad
              />

              <Text style={styles.paragraph}>Are you under 15?</Text>
              <Switch
                onValueChange = {handleChange('under15')}
                value = {values.under15}
              />
              <Text style={styles.paragraph}>Are you pregnant?</Text>
              <Switch
                onValueChange = {handleChange('pregnant')}
                value = {values.pregnant}
              />
              <Text style={styles.paragraph}>What kind of fish did you catch?</Text>
              <ModalDropdown
                style={styles.paragraph}
                options={['Atlantic Salmon', 'Aurora Trout', 'Bigmouth Buffalo', 'Black Crappie', 'Bluegill', 'Bowfin', 'Brook Trout', 'Brown Bullhead',
                  'Brown Trout', 'Channel Catfish', 'Chinook Salmon', 'Cisco(Lake Herring)', 'Coho Salmon', 'Common Carp', 'Freshwater Drum', 'Gizzard Shad',
                  'Goldeye', 'Goldfish', 'Lake Trout', 'Lake Whitefish', 'Largemouth Bass', 'Ling (Burbot)', 'Longnose Gar', 'Longnose Sucker', 'Mooneye', 'Muskellunge',
                  'Northern Pike', 'Pink Salmon', 'Pumpkinseed', 'Quillback Carpsucker', 'Rainbow Smelt', 'Rainbow Trout', 'Redhorse Sucker', 'Rock Bass', 'Round Whitefish',
                  'Salmon Hybrid', 'Sauger', 'Siscowet', 'Smallmouth Bass', 'Splake', 'Sturgeon', 'Walleye', 'White Bass', 'White Crappie', 'White Perch', 'White Sucker', 'Whitefish Hybrid', 'Yellow Perch' ]}/>
              <Text style={styles.paragraph}>How big was the fish?</Text>
              <ModalDropdown
                style={styles.paragraph}
                options={['15-20cm', '20-25cm', '25-30cm', '30-35cm', '35-40cm', '40-45cm', '45-50cm', '50-55cm', '55-60cm', '60-65cm', '65-70cm', '70-75cm', '75+ cm']}/>
              <Text style={styles.paragraph}>Where did you catch the fish?</Text>
              <Picker
                selectedValue={this.state.sp || null}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => this.setState({ sp: itemValue })}>
                {
                  lakes2.map(lake => {
                    return <Picker.Item key={lake} label={lake} />
                  })
                }
              </Picker>
            </View>
          )}
        </Formik>

      </View>
    ) : null
  }
}



function Species (id, data) {
  return <Picker.Item label="{data.en}" value="{id}" />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 30,
    backgroundColor: '#ecf0f1',
  },
  title: {
    margin: 5,
    //fontSize: 20,
    //fontWeight: 'bold',
    fontFamily: 'rubik-bold',
  },
  paragraph: {
    margin: 10,
   // fontSize: 13,
    //fontWeight: 'bold',
    //textAlign: 'left',
    //color: '#34495e',
  },
  picker: {
    height: 70,
    width: 300,
    justifyContent: 'center',
    alignContent: 'center',
    // fontSize: 20,
  },
});

