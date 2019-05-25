import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import { MonoText } from '../components/StyledText';
import { createDeck } from '../action';

class CreateDeck extends React.Component {
  static navigationOptions = {
    header: null,
  
  };

  state = {
    text: ''
  }
  createDeck = () => {
        this.props.createDeck(this.state.text);
        this.props.navigation.navigate('DeckDetail', { id: this.props.decks.length});
  }
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={'Deck Name'} value={this.state.text} onChangeText={(text) => this.setState({text})}></TextInput>
                <Button onPress={this.createDeck} title="Create">Create</Button>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
      padding: 20,
      marginTop: 50
  },
  input: {
      paddingBottom:20
  }
});

const mapStateToProps = state => {
  return {
    decks: state.deckReducer.decks
}
}
const mapDispatchToProps = dispatch => {
    return {
      createDeck: (name) => dispatch(createDeck(name))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateDeck);