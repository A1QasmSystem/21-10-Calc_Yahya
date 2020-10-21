import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  // TextInput,
  // Button,
  TouchableOpacity,
  // Image,
  // Alert,
  // Modal,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import ImagePicker from 'react-native-image-picker';
// import RNFetchBlob from 'rn-fetch-blob';

export default class Login extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  state = {
    count: 0,
  };

  onPressminus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPress()}>
            <Text style={styles.number}>C</Text>
          </TouchableOpacity>
          {/* <View style={{margin: 20}}>
          <Text>{this.state.count}</Text>
        </View> */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPressminus()}>
            <Text style={styles.number}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPress()}>
            <Text style={styles.number}>C</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => this.onPress()}>
            <Text style={styles.number}>+</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    // padding: 10,
    height: '10%',
    width: '15%',
    // marginBottom: 10,
    // marginRight: 10,
    // marginLeft: 10,
    margin: 5,
    borderRadius: 10,
  },
  number: {
    fontSize: 50,
  },
});
