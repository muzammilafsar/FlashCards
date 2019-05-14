import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Provider} from 'react-redux';
import { store } from './store';
import RouteHandler from './RouteHandler'
export default class App extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem('deckList').then(val => console.log(val));
  }
  render() {
    return (
      <Provider store={store}>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View> */}
      <RouteHandler />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
