const initialState = {
    appName: "English UP",
    userSentences: [],
    isOpenAlert: {
        open: false,
        vertical: 'top',
        horizontal: 'right',
        message: '',
        alertColour: 'info'
    },
    currentUser: {
        data: {},
        isAuth: false,
        isLoading: false,
        isLoggedIn: false
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

        case 'SET_USER':
            return {
                ...state,
                currentUser: {...state.currentUser, data: action.payload.user, isAuth: action.payload.isAuth, isLoggedIn: action.payload.isLoggedIn}
            }

        case 'DELETE_USER':
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    data: {},
                    isAuth: false,
                    isLoading: false,
                    isLoggedIn: false
                }
            }

        case 'SET_LOADING':
            return {
                ...state,
                currentUser: {...state.currentUser, isLoading: action.payload}
            }

        default:
            return state;
    }
}

export default reducer;

