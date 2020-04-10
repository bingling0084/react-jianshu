import reducer from './reducer';
import * as actionCreators from './actionCreator';
import * as constants from './constants';

// index.js文件作为store文件夹的统一入口，方便其他模块引入
export { reducer, actionCreators, constants };