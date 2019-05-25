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
import { connect } from 'react-redux';
import { createDeck } from '../action';

class Quiz extends React.Component {
    static navigationOptions = {
    };
    state = {
        text: '',
        currentQuestion: 0,
        correct: 0,
        wrong: 0,
        showAnswer: false,
        showResult: false
    }
    showAnswer
    nextQuestion = (ans) => {
        if(ans) {
            this.setState({correct: this.state.correct + 1});
        } else {
            this.setState({wrong: this.state.wrong + 1});
        }
        if (this.state.currentQuestion + 1 < this.props.decks[this.props.navigation.getParam('id')].cards.length) {
            this.setState({currentQuestion: this.state.currentQuestion + 1, showAnswer: false});
        } else {
            this.setState({showAnswer: false, showResult:true});
        }
    }
    retakeQuiz = () => {
        this.setState({
            showAnswer: false,
            showResult: false,
            currentQuestion: 0,
            correct: 0,
            wrong: 0
        })
    }
    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id', 0);
        return (
            <View style={styles.container}>
               { !this.state.showResult?
               <React.Fragment>
                <View style={styles.status}>
                    <Text>{this.state.currentQuestion + 1}/{this.props.decks[id].cards.length}</Text>
                </View>
                <View style={styles.quizContainer}>
                    <Text style={styles.title}>{(this.props.decks[id].cards[this.state.currentQuestion].question)}</Text>
                    {this.state.showAnswer ?<Text style={styles.answer}>Answer: {(this.props.decks[id].cards[this.state.currentQuestion].answer)}</Text>
                     : <Text></Text>}
                    {
                        !this.state.showAnswer ?
                        <Button title="Show Answer" onPress={() => this.setState({showAnswer: true})} type="clear" buttonStyle={[styles.button]} />
                        : <Text></Text>
                    }
                    <Button title="Correct" onPress={() => this.nextQuestion(true)} type="solid" buttonStyle={[styles.button, styles.correctButton]} />
                    <Button title="Wrong" onPress={() => this.nextQuestion(false)} type="solid" buttonStyle={[styles.button, styles.incorrectButton]} />
                </View>
                </React.Fragment>
                : 
                <View>
                    <Text style={[styles.result, {color: '#00796b'}]}> Correct: {this.state.correct}</Text>
                    <Text style={[styles.result, {color: '#c62828'}]}> Wrong: {this.state.wrong}</Text>
                    <View style={[{margin:20}]} >
                    <Button title="Retake Quiz" onPress={this.retakeQuiz}/>
                    <Button title="Back to Decks" type="clear" onPress={() => this.props.navigation.navigate('DeckDetail')} />
                    </View>
                </View>
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',

    },
    status: {
        //     flex: 1
        padding: 10
    },
    quizContainer: {
        // flex: 1,
        // backgroundColor: '#fff',
        // justifyContent: 'center',
        // flexDirection:'column'
    },
    title: {
        fontSize: 30,
        paddingBottom: 20,
        textAlign: 'center'
    },
    answer: {
        fontSize: 18,
        marginLeft: 20
    },
    button: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30
    },
    incorrectButton: {
        backgroundColor: '#c62828',
    },
    correctButton: {
        backgroundColor: '#00796b'
    },
    result: {
        padding:30,
        fontSize: 25
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
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);