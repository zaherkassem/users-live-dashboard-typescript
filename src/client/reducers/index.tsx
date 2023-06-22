import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as formReducer} from 'redux-form';
import { createBrowserHistory } from 'history';

// Import custom components
import authReducer from './authReducer';

// Create a browser history object
const history = createBrowserHistory();

const appReducer = (state: any, action: any) => combineReducers({
    router: connectRouter(history),
    form: formReducer,  // ← redux-form
    auth: authReducer,
});

const rootReducer = (state:any, action:any) => {

    if (action === 'LOG_OUT_SUCCESS') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;