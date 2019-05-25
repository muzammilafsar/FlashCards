import { CREATE_DECK, SET_DECK, SAVE_CARD, DELETE_DECK } from "./action";
import { AsyncStorage} from 'react-native';
const InitialState = {
    decks: []
}
function UpdateStorage(list) {
    AsyncStorage.setItem('deckList', JSON.stringify(list)).then(val => {
        console.log('success',val);
    }).catch(err=>{
        console.log('err', err);
        
    });
}
export default Reducer = (state = InitialState , action) => {
    switch(action.type) {
        case CREATE_DECK: {
            return {
                ...state,
                decks: [
                    ...state.decks,
                    {
                        name: action.payload,
                        cards: []
                    }
                ]
            }
        }
        case SET_DECK:{
            return {
                ...state,
                decks: action.payload
            }
        }
        case SAVE_CARD: {
            let decks = state.decks;
            decks[action.payload.id].cards = [...decks[action.payload.id].cards, action.payload.data];
            UpdateStorage(decks);
            return {
                ...state,
                decks: decks
            }
        }
        case DELETE_DECK: {
            let decks = state.decks;
            decks.splice(action.payload, 1);
            UpdateStorage(decks);
            return {
                ...state,
                decks: decks
            }
        }
        default:
        return state;
    }
}