import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class Calc extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      calc: '',
      history: [],
    };
  }

  addCalc(char) {
    this.setState({calc: this.state.calc + char});
  }

  addOperator(char) {
    const str = this.state.calc;
    const addedStr = str.substring(0, str.length - 1) + char;
    if (str !== '') {
      if (
        str.endsWith('+') ||
        str.endsWith('-') ||
        str.endsWith('*') ||
        str.endsWith('/') ||
        str.endsWith('%')
      ) {
        this.setState({calc: addedStr});
      } else {
        this.addCalc(char);
        try {
          const result = eval(this.state.calc);
          this.setState({result: result});
        } catch (error) {
          Alert.alert('Error', error);
          this.clear();
        }
      }
    } else if (str == '' && this.state.result !== '') {
      this.setState({calc: this.state.result + char, result: ''});
    }
  }

  del() {
    const str = this.state.calc;
    const deleted = str.substring(0, str.length - 1);
    this.setState({calc: deleted});
  }

  sum() {
    const str = this.state.calc;
    var sumStr = '';
    if (
      str.endsWith('+') ||
      str.endsWith('-') ||
      str.endsWith('*') ||
      str.endsWith('/') ||
      str.endsWith('%')
    ) {
      sumStr = str.substring(0, str.length - 1);
    } else {
      sumStr = str;
    }
    try {
      const result = eval(sumStr);
      this.setState({result: result});
      this.addHistory();
      this.setState({calc: ''});
    } catch (error) {
      alert(error);
      this.clear();
    }
  }

  clear() {
    this.setState({calc: '', result: ''});
  }

  addHistory() {
    const {calc} = this.state;
    this.setState({history: [...this.state.history, calc]});
  }

  componentDidUpdate() {
    console.log(this.state.history);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerResult}>
          <ScrollView style={styles.container}>
            {this.state.history.map((history, index) => (
              <View key={index}>
                <Text>{history}</Text>
                <Text>{eval(history)}</Text>
              </View>
            ))}
          </ScrollView>
          <Text style={styles.number}>{this.state.calc}</Text>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => this.clear()}
              style={[styles.button, styles.buttonOperator]}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addCalc('7')}
              style={styles.button}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addCalc('4')}
              style={styles.button}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addCalc('1')}
              style={styles.button}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addCalc('0')}
              style={styles.button}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => this.addOperator('%')}
              style={[styles.button, styles.buttonOperator]}>
              <Text style={styles.buttonText}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addCalc('8')}
              style={styles.button}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addCalc('5')}
              style={styles.button}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addCalc('2')}
              style={styles.button}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addCalc('00')}
              style={styles.button}>
              <Text style={styles.buttonText}>00</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => this.del()}
              style={[styles.button, styles.buttonOperator]}>
              <Text style={styles.buttonText}>del</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addCalc('9')}
              style={styles.button}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addCalc('6')}
              style={styles.button}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addCalc('3')}
              style={styles.button}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addCalc('.')}
              style={styles.button}>
              <Text style={styles.buttonText}>,</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.container, styles.buttonOperator]}>
            <TouchableOpacity
              onPress={() => this.addOperator('/')}
              style={styles.button}>
              <Text style={styles.buttonText}>:</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addOperator('*')}
              style={styles.button}>
              <Text style={styles.buttonText}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addOperator('-')}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addOperator('+')}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.sum()} style={styles.button}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Calc;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerResult: {
    flex: 1,
    backgroundColor: '#eee',
  },
  containerRow: {
    backgroundColor: '#969696',
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonOperator: {
    backgroundColor: '#808080',
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
