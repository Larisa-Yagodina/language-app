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
    },
    grammar: [
        {
            id: 'all_grammar',
            title: "Грамматика",
            completed: false,
            haveAccess: true
        },
        {
            id: 'present_simple',
            completed: false,
            haveAccess: true,
            title: "Present simple"
        },
        {
            id: 'past_simple',
            completed: false,
            haveAccess: true,
            title: "Past simple"
        },
        {
            id: 'future_simple',
            completed: false,
            haveAccess: true,
            title: "Future simple"
        },
        {
            id: 'there_is_there_are',
            completed: false,
            haveAccess: true,
            title: "Конструкция There is/There are"
        },
        {
            id: 'present_continuous',
            completed: false,
            haveAccess: true,
            title: "Настоящее продолженное время"
        },
        {
            id: 'past_continuous',
            completed: false,
            haveAccess: true,
            title: "Прошедшее продолженное время"
        },
        {
            id: 'future_continuous',
            completed: false,
            haveAccess: true,
            title: "Будушее продолженное время"
        },
        {
            id: 'future_patterns',
            completed: false,
            haveAccess: true,
            title: "Конструкции о будушем"
        },
        {
            id: 'present_perfect',
            completed: false,
            haveAccess: true,
            title: "Настоящее совершенное время"
        },
        {
            id: 'past_perfect',
            completed: false,
            haveAccess: true,
            title: "Прошедшее совершенное время"
        },
        {
            id: 'future_perfect',
            completed: false,
            haveAccess: true,
            title: "Будушее совершенное время"
        },
        {
            id: 'imperative_mood',
            completed: false,
            haveAccess: true,
            title: "Повелительное наклонение"
        },
        {
            id: 'prepositions',
            completed: false,
            haveAccess: true,
            title: "Предлоги"
        },
        {
            id: 'adverbs',
            completed: false,
            haveAccess: true,
            title: "Наречия"
        },
        {
            id: 'verb_and_gerund',
            completed: false,
            haveAccess: true,
            title: "Глаголы с герундием (like, enjoy и другие)"
        },
        {
            id: 'some_and_any',
            completed: false,
            haveAccess: true,
            title: "Местоимения some, any"
        },
        {
            id: 'quantifiers',
            completed: false,
            haveAccess: true,
            title: "Количественные местоимения"
        },
        {
            id: 'more_than',
            completed: false,
            haveAccess: true,
            title: "Сравнения"
        },
        {
            id: 'verb_and_infinitive',
            completed: false,
            haveAccess: true,
            title: "Глагол с инфинитивом"
        },
        {
            id: 'articles',
            completed: false,
            haveAccess: true,
            title: "Артикли a, the"
        },
        {
            id: 'modal_verbs',
            completed: false,
            haveAccess: true,
            title: "Модальные глаголы"
        },
        {
            id: 'conditionals',
            completed: false,
            haveAccess: true,
            title: "Условные предложения"
        },
    ],
    themes: [
        {
            id: 'smaltalks',
            completed: false,
            haveAccess: true,
            title: "Small talk"
        },
    ]
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

