import { combineReducers } from 'redux';

import accounts from './accounts';
 import comments from './comments';
import ratings from './rating';
import english from './english';
const appReducers = combineReducers({
    accounts,
    comments,
    ratings,
    english
});

export default appReducers;