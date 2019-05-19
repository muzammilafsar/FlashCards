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
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={'Deck Name'} value={this.state.text} onChangeText={(text) => this.setState({text})}></TextInput>
                <TouchableOpacity>
                <Button onPress={this.createDeck} title="Create">Create</Button>
                </TouchableOpacity>
            </View>
        </ScrollView>

        
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
  }
}
const mapDispatchToProps = dispatch => {
    return {
      createDeck: (name) => dispatch(createDeck(name))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateDeck);