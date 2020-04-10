import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { combineReducers } from 'redux-immutable';

//创建的reducer是一个immutable格式对象，传递给store，store的类型也变成了immutable
export default combineReducers({
    header: headerReducer,
    home: homeReducer
})