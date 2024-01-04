
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {thunk} from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UI from './reducers/ui/ui';

const rootReducer = combineReducers({
    ui: UI,
});

const persistConfig = {
    timeout: null,
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['ui']
}

const middleware = applyMiddleware(thunk);


let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const STORE = createStore(persistedReducer, middleware);
let PERSISTOR = persistStore(STORE);
export{
	STORE,
	PERSISTOR
}