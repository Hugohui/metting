import { combineReducers } from 'redux'
import { userReducer } from '../actions/user.redux.js'
import { addressReducer } from '../actions/address.redux.js'
import { systemReducer } from '../actions/system.redux.js'

const rootReducer = combineReducers({  // 合并规则
    user: userReducer,
    addressInfo: addressReducer,
    system: systemReducer
})
export default rootReducer;
