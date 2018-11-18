import { combineReducers } from 'redux'
import { userReducer } from '../actions/user.redux'
import { addressReducer } from '../actions/address.redux'
import { systemReducer } from '../actions/system.redux'

const rootReducer = combineReducers({  // 合并规则
    user: userReducer,
    addressInfo: addressReducer,
    system: systemReducer
})
export default rootReducer;
