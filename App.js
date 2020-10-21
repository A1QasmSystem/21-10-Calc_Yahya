//React Modules
import React, {Component} from 'react';
import {View, Text, ToastAndroid, ScrollView} from 'react-native';

//Styles
import styles from './src/styles';

//Custom Components
import NumberButtons from './src/components/NumberButton/index';
import HistoryView from './src/components/HistoryView/index';

//Button Calculator
const buttons = [
  ['CLEAR', 'DEL'],
  ['7', '8', '9', '÷'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '+'],
  ['.', '0', '=', '-'],
];

const initialOutput = '0';
const maxLength = 57;

//Untuk berfungsi sebagai kelas Container
export default class App extends Component {
  //Initialization
  constructor(props) {
    super(props);
    this.state = {
      _output: initialOutput,
      _mathExpression: '',
      _history: [],
    };
    this._handleEvent = this._handleEvent.bind(this);
    this._clearHistory = this._clearHistory.bind(this);
  }

  //Function digunakan apabila tombol ditekan
  _handleEvent = (value) => {
    if (!isNaN(value) || value == '.') {
      this._concatToOutput(value);
    } else {
      switch (value) {
        case buttons[0][0]:
          this._initOutput();
          break;

        case buttons[0][1]:
          if (this.state._output.length === 1) {
            this._initOutput();
          } else {
            this._replaceLastIndex('');
          }
          break;

        case buttons[4][2]:
          this._evaluate();
          break;

        default:
          let strLastChar = this.state._output.slice(-1);
          if (isNaN(strLastChar)) {
            this._replaceLastIndex(value);
          } else {
            this._concatToOutput(value);
          }
          break;
      }
    }
  };

  //Function berfungsi untuk menggabungkan input ke output
  _concatToOutput = (value) => {
    if (this.state._output.length >= maxLength) {
      this._showToast(
        'Maximum Expression Length of ' + maxLength + ' is reached.',
      );
    } else {
      if (this.state._output !== initialOutput) {
        this.setState({_output: this.state._output + '' + value + ''});
      } else {
        this.setState({_output: value + ''});
      }
    }
  };

  //Function berfungsi untuk mengganti indeks output
  _replaceLastIndex = (value) => {
    var str1 = this.state._output.replace(/.$/, value);
    this.setState({
      _output: str1,
    });
  };

  //berfungsi untuk menghitung dan mengvalidasi status keluaran
  _evaluate = () => {
    try {
      let strCurOutput = this.state._output;
      if (isNaN(strCurOutput)) {
        let dEval = eval(this._convertToMathExpression(this.state._output));

        let aHistory = [...this.state._history];
        aHistory.push([strCurOutput, dEval]);

        this.setState({
          _output: '' + dEval,
          _history: aHistory,
        });
      }
    } catch (exception) {
      /* console.log('exception: ' + exception); */
      this._showToast('Invalid format used.');
    }
  };

  //Berfungsi untuk mengubah status keluaran menjadi ekspresi matematika yang valid
  _convertToMathExpression = (value) => {
    let strTemp = value.replace(
      new RegExp(this._escapeRegExp(buttons[1][3]), 'g'),
      '/',
    );
    strTemp = strTemp.replace(
      new RegExp(this._escapeRegExp(buttons[2][3]), 'g'),
      '*',
    );
    return strTemp;
  };

  _escapeRegExp = (str) => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
  };

  //Berfungsi untuk menginisialisasi status keluaran
  _initOutput = () => {
    this.setState({
      _output: initialOutput,
    });
  };

  //Berfungsi untuk menghapus history
  _clearHistory = () => {
    console.log('inside _clearHistory function');
    const emptyArray = [];
    this.setState({
      _history: emptyArray,
    });
  };

  //Berfungsi untuk menampilkan android toast
  _showToast = (value) => {
    ToastAndroid.show(value, ToastAndroid.SHORT);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contHistory}>
          <HistoryView
            data={this.state._history}
            onClear={this._clearHistory}
          />
        </View>
        <View style={styles.contOutput}>
          <View style={styles.placeHolderOutput}>
            <Text style={styles.txtDefault}>{this.state._output}</Text>
          </View>
        </View>
        <View style={styles.contButtons}>
          <NumberButtons onBtnPress={this._handleEvent} buttons={buttons} />
        </View>
      </View>
    );
  }
}
// ------------------------------------------------------------
// import React, {Component} from 'react';
// import {Text, View} from 'react-native';

// // styles
// import styles from './src/styles';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.contHistory} />
//         <View style={styles.contOutput}>
//           <View style={styles.placeHolderOutput}>
//             <Text style={styles.txtDefault}>OUTPUT HERE</Text>
//           </View>
//         </View>
//         <View style={styles.contButtons} />
//       </View>
//     );
//   }
// }

// =====================================
// =====================================
// =====================================
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import {NavigationContainer, StackActions} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {Image, View} from 'react-native';
// import House from './screen/assets/home.png';
// import orang from './screen/assets/orang.png';
// import list from './screen/assets/list.png';

// //Import screen auth
// import Splashscreen from './screen/auth/splashscreen';
// import Login from './screen/auth/login';
// import Register from './screen/auth/register';
// import ResetPassword from './screen/auth/ResetPassword';

// // import screen dashboard
// import Home from './screen/dashboard/home';
// // import Todo1 from './src/screen/dashboard/todo1';
// // import Todo2 from './src/screen/dashboard/todo2';
// import Todo3 from './screen/dashboard/todo3';
// import Profile from './screen/dashboard/profile';
// import Drawercontent from './screen/dashboard/drawercontent';

// const Stack = createStackNavigator();
// const BottomTab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// const IconBottom = (props) => {
//   const {color, focused} = props.data;
//   let colorSelected = focused ? color : 'grey';
//   return (
//     <View>
//       <Image
//         source={props.image}
//         style={{width: 25, height: 25, tintColor: colorSelected}}
//       />
//     </View>
//   );
// };

// const Dashboard = () => {
//   return (
//     <BottomTab.Navigator>
//       <BottomTab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: (props) => <IconBottom data={props} image={House} />,
//         }}
//       />
//       {/* <BottomTab.Screen
//         name="Todo1"
//         component={Todo1}
//         options={{
//           tabBarIcon: (props) => <IconBottom data={props} image={list} />,
//         }}
//       />
//       <BottomTab.Screen
//         name="Todo2"
//         component={Todo2}
//         options={{
//           tabBarIcon: (props) => <IconBottom data={props} image={list} />,
//         }}
//       /> */}
//       <BottomTab.Screen
//         name="Todo3"
//         component={Todo3}
//         options={{
//           tabBarIcon: (props) => <IconBottom data={props} image={list} />,
//         }}
//       />
//       <BottomTab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: (props) => <IconBottom data={props} image={orang} />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// };

// const RootDrawer = () => {
//   return (
//     <Drawer.Navigator drawerContent={() => <Drawercontent />}>
//       <Drawer.Screen name="Home" component={Dashboard} />
//     </Drawer.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator headerMode={false}>
//         <Stack.Screen
//           name="Splashscreen"
//           component={Splashscreen}
//           options={{headerShown: true}}
//         />
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{headerShown: true}}
//         />
//         <Stack.Screen
//           name="Register"
//           component={Register}
//           options={{headerShown: true}}
//         />
//         <Stack.Screen
//           name="ResetPassword"
//           component={ResetPassword}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Dashboard"
//           component={RootDrawer}
//           options={{headerShown: true}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
