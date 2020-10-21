const React = require('react-native');
const {StyleSheet} = React;

export default {
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  contHistory: {
    flex: 0.35,
    borderBottomWidth: 1,
    borderColor: '#000',
  },

  contOutput: {
    flex: 0.25,
  },

  contButtons: {
    flex: 0.4,
    backgroundColor: '#bdc3c7',
  },

  placeHolderOutput: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
    paddingLeft: 15,
  },

  txtDefault: {
    color: '#000',
    fontFamily: 'Helvetica-Light',
    fontSize: 30,
  },
};
// ---------------------------------------------------------------
// const React = require('react-native');
// const {StyleSheet} = React;

// export default {
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   contHistory: {
//     flex: 0.3,
//     backgroundColor: 'red',
//   },
//   contOutput: {
//     flex: 0.2,
//   },
//   contButtons: {
//     flex: 0.5,
//     backgroundColor: '#bdc3c7',
//   },
//   placeHolderOutput: {
//     flex: 1,
//     backgroundColor: 'green',
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//     paddingRight: 20,
//   },
//   txtDefault: {
//     color: '#fff',
//     fontFamily: 'Helvatica-Light',
//     fontSize: 30,
//   },
// };
