import React from 'react';
import { ScrollView, StyleSheet, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { saveCard } from '../action';
import { connect } from 'react-redux';

class AddCard extends React.Component {
    static navigationOptions = {
        title: 'Add Card',
    };
    state = {
        question: '',
        answer: ''
    }
    saveCard = () => {
        if(this.state.answer==='' || this.state.question==='') 
        {
            return;
        }
        const { navigation } = this.props;
        const id = navigation.getParam('id', 0);
        let data = {
            question: this.state.question,
            answer: this.state.answer
        }
        this.props.createCard({
            id,
            data
        });
        this.props.navigation.goBack();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput placeholder={'Question'}  onChangeText={(text) => this.setState({ question:text})}></TextInput>
                </View>
                <View style={styles.input}>
                    <TextInput placeholder={'Answer'} onChangeText={(text) => this.setState({ answer:text })}></TextInput>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="SAVE CARD" type="solid" onPress={this.saveCard}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    input: {
        margin: 20,
        borderColor: '#1e88e5',
        borderBottomWidth: 2
    },
    buttonContainer: {
        margin: 20,
    }
});
const mapStateToProps = state => {
    return {
        decks: state.deckReducer.decks
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createCard: (name) => dispatch(saveCard(name))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCard);