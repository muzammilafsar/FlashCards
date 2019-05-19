import { CREATE_DECK } from "./action";

const InitialState = {
    decks: [
        'first'
    ]
}
export default Reducer = (state = InitialState , action) => {
    switch(action.type) {
        case CREATE_DECK:{
            return {
                ...state,
                decks: [
                    ...state.decks,
                    {
                        name: action.payload,
                        card: []
                    }
                ]
            }
        }
        default:
        return state;
    }
}