import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, TextInput, Picker, Switch, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Constants, Font } from 'expo';
import data from './lib/datajs';

import AutoComplete from './components/AutoComplete';
import ModalDropdown from 'react-native-modal-dropdown';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      under15: false,
      pregnant: false,
      sp: { value: '', selected: null },
      lake: { value: '', selected: null },
      len: { value: '', selected: null }
    };
  }
  //Attempt at submit button function
  submit() {
  let submission={}
  submission.sp=this.state.sp,
  submission.lake=this.state.lake,
  submission.len=this.state.len,
  console.warn(submission);
//eventual Api fetch??
 /* var url = '';

  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(submission), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
  */
  }

  async componentDidMount() {
    await Font.loadAsync(require('./lib/fonts'));

    this.setState({ fontLoaded: true });
  }

  handleChange(k) {
    return v => {
      console.log('handling change:', k, v)
      var update = {}
      update[k] = v
      this.setState(update)
    }
  }

  handleSelect(k) {
    return v => {
      console.log('handling select:', k, v)
      var update = {}
      update[k] = Object.assign({}, this.state[k], { selected: v })
      this.setState(update)
    }
  }

  handleTyping(k) {
    return v => {
      console.log('handling typing:', k, v)
      var update = {}
      update[k] = Object.assign({}, this.state[k], { value: v })
      this.setState(update)
    }
  }

  _scrollToInput (reactNode: any) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.scrollToFocusedInput(reactNode)
  }

  render() {
    var scrollOnFocus = (event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))

    return this.state.fontLoaded ? (
      <ScrollView>
        <KeyboardAvoidingView style={styles.app} behavior="padding" enabled>
          <Text style={styles.title}>GEOF: Guide To Eating Ontario Fish</Text>

          <Text style={styles.paragraph}>Are you under 15 years old?</Text>

          <Switch
            onValueChange = {this.handleChange('under15')}
            value = {this.state.under15}
          />

          <Text style={styles.paragraph}>Are you pregnant?</Text>

          <Switch
            onValueChange = {this.handleChange('pregnant')}
            value = {this.state.pregnant}
          />

          <Text style={styles.paragraph}>What kind of fish did you catch?</Text>

          <AutoComplete
            onSelect={this.handleSelect('sp')}
            style={styles.autocomplete}
            suggestionObjectTextProperty='en'
            inputStyle={styles.autocompleteInput}
            suggestions={data.spp}
            value={this.state.sp.selected ? this.state.sp.selected.en : this.state.sp.value}
            onChangeText={this.handleTyping('sp')}
            autoCorrect={false}
            keyboardType='default'
            textContentType='none'
          />

          <Text style={styles.paragraph}>How big was the fish? </Text>

          <Picker onValueChange={this.handleSelect('lens')} style={styles.autocomplete} itemStyle={styles.pickerItem}>
             {data.lens.map(data => <Picker.Item key={"lens_" + data.index} label={data.value} value={data.id} />)}
          </Picker>

          <Text style={styles.paragraph}>Where did you catch the fish?</Text>

          <AutoComplete
            onSelect={this.handleSelect('lake')}
            suggestions={data.wbs}
            suggestionObjectTextProperty='en'
            style={styles.autocomplete}
            inputStyle={styles.autocompleteInput}
            value={this.state.lake.selected ? this.state.lake.selected.en : this.state.lake.value}
            onChangeText={this.handleTyping('lake')}
            autoCorrect={false}
            keyboardType='default'
            textContentType='none'
          />
          <TouchableOpacity
          onPress={()=>this.submit()}>
          <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    ) : null
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 10,
    alignItems: 'stretch',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  title: {
    margin: 5,
    fontSize: 40,
    // fontWeight: 'bold',
    fontFamily: 'rubik-bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 10,
    fontSize: 23,
    fontFamily: 'lato-bold',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#34495e',
  },
  paragraph2: {
    margin: 12,
    fontSize: 23,
    fontFamily: 'lato-bold',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#34495e',
  },
  autocomplete: {
    justifyContent: 'flex-end',
    margin: 10,
    padding: 4,
    paddingBottom: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
  },
  autocompleteInput: {
    fontSize: 23,
    fontFamily: 'lato-regular',
    color: '#317dc3',
    padding: 14,
  },
  picker: {
    margin: -39, 
    fontSize: 20,
  },
  pickerItem: {
    fontSize: 20,
    backgroundColor: 'white',
    color: '#34495e',
  },
  submit: {
    backgroundColor: 'skyblue',
    margin: 20,
    fontSize: 23,
    fontFamily: 'lato-bold',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
