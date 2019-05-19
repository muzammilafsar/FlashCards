export const CREATE_DECK = 'CREATE_DECK';
export const ADD_TO_DECK = 'ADD_TO_DECK';
export const LOADING = 'LOADING';
import { AsyncStorage} from 'react-native';
export function setLoading(payload) {
    return {
        type: LOADING,
        payload
    }
}
export const createDeck = (payload) => dispatch => {
    // (dispatch) => {
        AsyncStorage.getItem('deckList').then(val => {
            if(val ) {

                AsyncStorage.setItem('deckList', [payload , ...val])
            } else {
                AsyncStorage.setItem('deckList', [payload])
            }

        })
        dispatch({
            type: CREATE_DECK,
            payload
        })
    // }
}