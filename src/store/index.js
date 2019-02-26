import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import hadithBooksReducer from "../reducers/hadithBooksReducer";
// import hadithCategoryReducer from "../reducers/hadithCategoryReducer";

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
    hbr: hadithBooksReducer
    // hcr: hadithCategoryReducer,
});

export default function Store() {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
}
