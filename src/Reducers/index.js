import RegisterReducer from './RegisterReducer';
import Loginreducer from './Loginreducer';
import questionpageReducer from './questionpageReducer';
import { combineReducers } from 'redux';
import Confirmreducer from './Confirmreducer';
export default combineReducers({
RegisterReducer,Loginreducer,questionpageReducer,Confirmreducer
})