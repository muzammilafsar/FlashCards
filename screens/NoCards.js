import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Button } from 'react-native-elements';

class NoCards extends React.Component {
    static navigationOptions = {
    };
    state = {
        text: ''
    }
    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.title}>Please Add Cards to start Quiz.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
    },
    title: {
        fontSize: 25,
        paddingBottom: 20,
        textAlign: 'center'
    }
});

export default NoCards;