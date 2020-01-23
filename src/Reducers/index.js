import RegisterReducer from './RegisterReducer';
import Loginreducer from './Loginreducer';
import questionpageReducer from './questionpageReducer';
import Confirmreducer from './Confirmreducer';
import ResetReducer from './ResetReducer'
import { combineReducers } from 'redux';


export default combineReducers({
RegisterReducer,Loginreducer,questionpageReducer,Confirmreducer,ResetReducer
})