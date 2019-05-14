import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { createDeck } from './action';
class AddDeck extends React.Component {
    state = {
        deckName: ''
    }
    saveDeck = () => {
        alert('sadsa')
        this.props.addDeck({name: this.state.deckName});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>AddDeck</Text>
                <TextInput placeholder="Type Deck Name" style={styles.Input}
                    onChangeText={(text) => this.setState({ deckName: text })}></TextInput>
                <Button title="Add Deck" onPress={this.saveDeck} ></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Input: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
const mapDispatchToprops = (dispatch) => {
    return {
        addDeck: (name) => dispatch(createDeck(name))
    }
}
export default connect({}, mapDispatchToprops)(AddDeck);