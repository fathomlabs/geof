import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Picker, Switch, Button } from 'react-native';
import { Constants, Font } from 'expo';
import { Formik } from 'formik';
import data from './assets/data'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      under15: props.under15,
      pregnant: props.pregnant
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
            <Picker
              selectedValue={this.state.sp || null}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => this.setState({ sp: itemValue })}>
              Object.keys(data.spp).map(k => Species(k, data.spp[k]))
            </Picker>
            <Button onPress={handleSubmit} title="submit" color="#841584" />
            </View>
          )}
        </Formik>

      </View>
    ) : null;
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
    paddingTop: Constants.statusBarHeight + 100,
    backgroundColor: '#ecf0f1',
  },
  title: {
    margin: 18,
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'rubik-bold',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#34495e',
  },
  picker: {
    height: 100,
    width: 300,
    justifyContent: 'center',
    alignContent: 'center',
  }
});
