const initialState = {
    userWords: [],
    userSentences: [],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'GET_USER_WORDS':
            return {
                ...state,
                userWords: action.payload,
            };

        case 'GET_USER_SENTENCES':
            return {
                ...state,
                userSentences: action.payload.reverse(),
            };

        default:
            return state;
    }
}

export default reducer;

