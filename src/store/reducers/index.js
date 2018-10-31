import { combineReducers } from 'redux'
import { userReducer } from '../actions/user.redux'
import { systemReducer } from '../actions/system.redux'

const rootReducer = combineReducers({  // 合并规则
    user: userReducer,
    system: systemReducer
})
export default rootReducer;
