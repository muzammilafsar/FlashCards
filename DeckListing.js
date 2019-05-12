import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
 class DeckListing extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      {/* {
        this.props.decks.map(val => ( */}
          <Text>dfgdf</Text>
      {/* //   ))
      // } */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
const mapStateToprops = (state) => {
  return {
    decks: state.decks
  }
}
export default (DeckListing);