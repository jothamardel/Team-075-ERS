import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import sendHelpReducer from './sendHelp/sendHelp-reducer';
import reportReducer from './report/report.reducer';
import modalReducer from './modal/modal.reducer';
import updateReducer from './updateProfile/updateProfile.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'help']
};

const rootReducer = combineReducers({
  user: userReducer,
  help: sendHelpReducer,
  report: reportReducer,
  modal: modalReducer,
  update: updateReducer
});

export default persistReducer(persistConfig, rootReducer);
