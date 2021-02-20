// import {createStore , applyMiddleware} from 'redux';
// import rootReducer from './root-reducer'
// import logger from 'redux-logger';

// const middleWares = [logger];

//  const store = createStore(rootReducer, applyMiddleware(...middleWares));


// export default store;


import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';


const middleWares = [logger];

export default createStore(rootReducer , applyMiddleware(...middleWares));
 




