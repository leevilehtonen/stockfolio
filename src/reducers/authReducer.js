import * as types from '../actions/actionTypes';
import jwtDecode from 'jwt-decode';
import { defaultLinks } from '../utils/links';


const authReducer = (state = {
    token: null,
    userName: null,
    isFetching: false,
    isAuthenticated: false,
    links: defaultLinks

}, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
            })
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                token: action.id_token,
                userName: jwtDecode(action.id_token).name

            })
        case types.LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                token: null,
                userName: null,
            })

        case types.LOGOUT_REQUEST:
            return Object.assign({}, state, {
                isAuthenticated: false,
                token: null,
                userName: null,
            })

        case types.REGISTER_REQUEST:
            return Object.assign({}, state, {
                isFetching:true,
            })
        case types.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isFetching:false,
            })
        case types.REGISTER_FAILURE:
            return Object.assign({}, state, {
                isFetching:false,
            })
        default:
            return state;
    }
}

export default authReducer;