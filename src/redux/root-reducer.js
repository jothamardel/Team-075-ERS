import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import sendHelpReducer from './sendHelp/sendHelp-reducer';
import reportReducer from './report/report.reducer';
import modalReducer from './modal/modal.reducer';
import updateReducer from './updateProfile/updateProfile.reducer';
import responseReducer from './response/response.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'help', 'report', 'modal', 'update', 'response']
};

const rootReducer = combineReducers({
  user: userReducer,
  help: sendHelpReducer,
  report: reportReducer,
  modal: modalReducer,
  update: updateReducer,
  response: responseReducer
});

export default persistReducer(persistConfig, rootReducer);
