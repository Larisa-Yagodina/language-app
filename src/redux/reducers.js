const initialState = {
    userWords: [],
    userSentences: [],
    isOpenAlert: {
        open: false,
        vertical: 'top',
        horizontal: 'center',
        message: '',
        alertColour: 'info'
    }
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

        case 'OPEN_ALERT':
            return {
                ...state,
                isOpenAlert: {...state.isOpenAlert, open: true, message: action.payload.message, alertColour: action.payload.alertColour},
            }

        case 'CLOSE_ALERT':
            return {
                ...state,
                isOpenAlert: {...state.isOpenAlert, open: false, message: '', alertColour: 'info'},
            }


        default:
            return state;
    }
}

export default reducer;

