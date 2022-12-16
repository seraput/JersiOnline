import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import reducers from './index';
import thunk from 'react-redux';

const store = configureStore(reducers, applyMiddleware(thunk));

export default store;
