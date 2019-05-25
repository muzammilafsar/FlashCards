export const CREATE_DECK = 'CREATE_DECK';
export const ADD_TO_DECK = 'ADD_TO_DECK';
export const LOADING = 'LOADING';
export const SET_DECK = 'SET_DECK';
export const SAVE_CARD = 'SAVE_CARD';
export const DELETE_DECK = 'DELETE_DECK';
import { AsyncStorage} from 'react-native';
import { store } from './store';

export function setLoading(payload) {
    return {
        type: LOADING,
        payload
    }
}
export function deleteDeck(payload) {
    return {
        type: DELETE_DECK,
        payload
    }
}
export function saveCard(payload) {
    return {
        type: SAVE_CARD,
        payload
    }
}
export function setDeckItems(payload) {
    return {
        type: SET_DECK,
        payload
    }
}
export const restoreDeck =  () => {
    AsyncStorage.getItem('deckList').then(val => {
        if(val) {
            store.dispatch(setDeckItems(JSON.parse(val)));
        } else {

        }
    });
}
export const createDeck = (payload) => dispatch => {
    // (dispatch) => {
        let deck = {
            name: payload,
            cards: []
        }
        AsyncStorage.getItem('deckList').then(val => {
                if(val ) {
                let deckList = JSON.parse(val);

                AsyncStorage.setItem('deckList', JSON.stringify([...deckList, deck])).then(val => {}).catch(err=>{});
            } else {
                AsyncStorage.setItem('deckList', JSON.stringify([deck])).then(val => {console.log('success', val)}).catch(err=>{console.log('err', err)});
            }

        })
        dispatch({
            type: CREATE_DECK,
            payload
        })
    // }
}