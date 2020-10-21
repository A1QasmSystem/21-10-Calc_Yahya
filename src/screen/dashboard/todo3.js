import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Alert, StyleSheet} from 'react-native';

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
      <View style={styles.containerRow}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.onPress()}
            style={[styles.button, styles.buttonOperator]}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('7')}
            style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('4')}
            style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('1')}
            style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('0')}
            style={styles.button}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.onPress('%')}
            style={[styles.button, styles.buttonOperator]}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('8')}
            style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('5')}
            style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('2')}
            style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('00')}
            style={styles.button}>
            <Text style={styles.buttonText}>00</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.onPress()}
            style={[styles.button, styles.buttonOperator]}>
            <Text style={styles.buttonText}>del</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('9')}
            style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('6')}
            style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('3')}
            style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('.')}
            style={styles.button}>
            <Text style={styles.buttonText}>,</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.container, styles.buttonOperator]}>
          <TouchableOpacity
            onPress={() => this.onPress('/')}
            style={styles.button}>
            <Text style={styles.buttonText}>:</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('*')}
            style={styles.button}>
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('-')}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPress('+')}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.sum()} style={styles.button}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerResult: {
    flex: 1,
    backgroundColor: '#eee',
  },
  containerRow: {
    backgroundColor: '#DDDDDD',
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 30,
  },
  buttonOperator: {
    backgroundColor: '#DDDDDD',
  },
  buttonText: {
    fontSize: 24,
  },
  number: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'right',
  },
  result: {
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'right',
  },
});
