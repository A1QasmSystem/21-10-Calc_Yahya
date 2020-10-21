import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      dataListTodo: [],
      modal: false,
      //paramter
      ImageSource: null,
      data: null,
      task: '',
      desc: '',
      is_done: 0,
    };
  }

  getListTodo = () => {
    const {token} = this.state;
    console.log(token + 'token getlisttodo function');
    fetch('http://restful-api-laravel-7.herokuapp.com/api/todo/', {
      method: 'GET', //Request Type
      headers: {
        //Header Defination
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const {status} = res;
        if (status) {
          this.setState({
            dataListTodo: [],
          });
        } else {
          this.setState({
            dataListTodo: res,
          });
        }
      });
  };

  componentDidMount() {
    AsyncStorage.getItem('token').then((value) => {
      console.log(value);
      if (value !== null) {
        this.setState({token: value});
      }
    });
    setTimeout(() => {
      this.getListTodo();
    }, 3000);
  }

  hapusTodo = (id) => {
    const {token} = this.state;
    fetch(`http://restful-api-laravel-7.herokuapp.com/api/todo/${id.id}`, {
      method: 'DELETE', //Request Type
      headers: {
        //Header Defination
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        alert('Sukses Hapus');
        this.getListTodo();
      })
      .catch((err) => console.log(err));
  };

  sendTodo = () => {
    const {token, task, desc, is_done, data} = this.state;

    RNFetchBlob.fetch(
      'POST',
      'http://restful-api-laravel-7.herokuapp.com/api/todo',
      {
        Authorization: `Bearer ${token}`,
        otherHeader: 'foo',
        'Content-Type': 'multipart/form-data',
      },
      [
        {name: 'task', data: task},
        {name: 'desc', data: desc},
        {name: 'is_done', data: is_done},
        {
          name: 'image',
          filename: 'image.png',
          type: 'image/png',
          data: data,
        },
      ],
    )
      .then((resp) => {
        var tempMSG = resp.data;

        tempMSG = tempMSG.replace(/^"|"$/g, '');

        console.log(tempMSG);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // onClickListener = (viewId) => {
  //   Alert.alert('Alert', 'Button pressed ' + viewId);
  // };

  render() {
    // console.log('ini dari token' + this.state.token);
    console.log(this.state.dataListTodo);
    return (
      <View>
        {this.state.dataListTodo.map((value, index) => {
          return (
            <TouchableOpacity
              onPress={() => this.hapusTodo({id: value.id})}
              key={index}
              style={{height: 80, backgroundColor: '#783854', margin: 10}}>
              <Text>{value.task}</Text>
              <Text>{value.desc}</Text>
              <Image
                source={{
                  uri: `http://restful-api-laravel-7.herokuapp.com/img/${value.image}`,
                }}
                style={{height: 50, width: 50}}
              />
              <Text>{value.is_done}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#DCDCDC',
  // },
  // inputContainer: {
  //   borderBottomColor: '#F5FCFF',
  //   backgroundColor: '#FFFFFF',
  //   borderRadius: 30,
  //   borderBottomWidth: 1,
  //   width: 300,
  //   height: 45,
  //   marginBottom: 20,
  //   flexDirection: 'row',
  //   alignItems: 'center',

  //   shadowColor: '#808080',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 5,
  // },
  // inputs: {
  //   height: 45,
  //   marginLeft: 16,
  //   borderBottomColor: '#FFFFFF',
  //   flex: 1,
  // },
  // inputIcon: {
  //   width: 30,
  //   height: 30,
  //   marginRight: 15,
  //   justifyContent: 'center',
  // },
  // buttonContainer: {
  //   height: 45,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: 20,
  //   width: 300,
  //   borderRadius: 30,
  //   backgroundColor: 'transparent',
  // },
  // btnForgotPassword: {
  //   height: 15,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   alignItems: 'flex-end',
  //   marginBottom: 10,
  //   width: 300,
  //   backgroundColor: 'transparent',
  // },
  // loginButton: {
  //   backgroundColor: '#00b5ec',

  //   shadowColor: '#808080',
  //   shadowOffset: {
  //     width: 0,
  //     height: 9,
  //   },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 12.35,

  //   elevation: 19,
  // },
  // loginText: {
  //   color: 'white',
  // },
  // bgImage: {
  //   flex: 1,
  //   resizeMode,
  //   position: 'absolute',
  //   width: '100%',
  //   height: '100%',
  //   justifyContent: 'center',
  // },
  // btnText: {
  //   color: 'white',
  //   fontWeight: 'bold',
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: '#00b5ec',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
