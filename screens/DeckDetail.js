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
  Alert
} from 'react-native';
import { Button } from 'react-native-elements';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import { MonoText } from '../components/StyledText';
import { createDeck, deleteDeck } from '../action';

class DeckDetail extends React.Component {
  static navigationOptions = {
  };
  state = {
    text: ''
  }  
  componentDidMount() {
    const didBlurSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.forceUpdate();
      }
    );
  }
  createDeck = () => {
        this.props.createDeck(this.state.text);
  }
  openDeleteDialog = (id) => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to delete Deck',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => {this.props.deleteDeck(id);this.props.navigation.goBack()}},
      ],
      {cancelable: false},
    );
  }
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', 0);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.decks[id].name}</Text>
        <Text style={styles.card}>{this.props.decks[id].cards.length} cards</Text>
        <Button  title="ADD CARD" onPress={() => this.props.navigation.navigate('AddCard',{id: id})} type="outline" buttonStyle={[styles.button]} />
        <Button  title="START QUIZ" onPress={() => this.props.navigation.navigate(this.props.decks[id].cards.length != 0 ? 'Quiz': 'NoCards',{id: id})} type="solid" buttonStyle={[styles.button, styles.quizButton]}/>
        <Button  title="DELETE Deck" onPress={() => this.openDeleteDialog(id)}type="solid" buttonStyle={[styles.button, styles.deleteButton]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection:'column'
  },
  title: {
      fontSize: 30,
      paddingBottom: 20,
      textAlign: 'center'
  },
  card: {
    fontSize: 15,
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
    marginLeft:30,
    marginRight:30
  },
  deleteButton: {
    backgroundColor: '#ef5350',
  },
  AddButton: {
},
quizButton: {
    backgroundColor: '#1e88e5'
}
});

const mapStateToProps = state => {
  return {
    decks: state.deckReducer.decks
  }
}
const mapDispatchToProps = dispatch => {
    return {
      createDeck: (name) => dispatch(createDeck(name)),
      deleteDeck: id => dispatch(deleteDeck(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);