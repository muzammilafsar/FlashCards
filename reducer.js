import { CREATE_DECK } from "./action";

const InitialState = {
    decks: []
}
export default Reducer = (state , action) => {
    switch(action.type) {
        case CREATE_DECK:{
            return {
                ...state,
                decks: [
                    ...state.decks,
                    action.payload
                ]
            }
        }
        default:
        return state;
    }
}