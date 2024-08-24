import * as Redux from '../js/redux.browser.mjs'
import counter from './counter.js'
console.log(counter)

const reducer = Redux.combineReducers({counter})

const store = Redux.createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;