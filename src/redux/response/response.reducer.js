import ConstantsActionTypes from './response.constants';

const INITIAL_STATE = {
  victims: [],
  units: [],
  isPending: false,
  errorMessage: null,
  message: null,
  currentUser: null,
  subscriptionStatus: null,
  sendLocation: null
};

const responseReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ConstantsActionTypes.SIGNUP_RESPONSE_UNIT_START:
      return ({
        ...state,
        isPending: true
      });
    case ConstantsActionTypes.SIGNUP_RESPONSE_UNIT_SUCCESS:
      return ({
        ...state,
        isPending: false,
        message: action.payload
      });
    case ConstantsActionTypes.SIGNUP_RESPONSE_UNIT_FAILED:
      return ({
        ...state,
        isPending: false,
        errorMessage: action.payload
      });
    case ConstantsActionTypes.LOGIN_RESPONSE_UNIT_START:
      return ({
        ...state,
        isPending: true
      });
    case ConstantsActionTypes.LOGIN_RESPONSE_UNIT_SUCCESS:
      return ({
        ...state,
        isPending: false
      });
    case ConstantsActionTypes.LOAD_RESPONSE_UNIT:
      return ({
        ...state,
        currentUser: action.payload
      });
    case ConstantsActionTypes.LOGIN_RESPONSE_UNIT_FAILED:
      return ({
        ...state,
        errorMessage: action.payload
      });
    case ConstantsActionTypes.GET_VICTIMS_START:
      return ({
        ...state,
        isPending: true
      });
    case ConstantsActionTypes.GET_VICTIMS_SUCCESS:
      return ({
        ...state,
        isPending: false,
        message: action.payload
      });
    case ConstantsActionTypes.LOAD_VICTIMS:
      return ({
        ...state,
        isPending: false,
        victims: action.payload
      });
    case ConstantsActionTypes.GET_VICTIMS_FAILED:
      return ({
        ...state,
        isPending: false,
        errorMessage: action.payload
      });
    case ConstantsActionTypes.LOGOUT_RESPONSE_UNIT:
      return ({
        ...state,
        victims: [],
        isPending: false,
        errorMessage: null,
        message: null,
        currentUser: null
      });
    case ConstantsActionTypes.GET_RESPONSE_UNITS_START:
      return ({
        ...state,
        isPending: true
      });
    case ConstantsActionTypes.GET_RESPONSE_UNITS_SUCCESS:
      return ({
        ...state,
        isPending: false,
        message: action.payload
      });
    case ConstantsActionTypes.GET_RESPONSE_UNITS_FAILED:
      return ({
        ...state,
        isPending: false,
        errorMessage: action.payload
      });
    case ConstantsActionTypes.LOAD_ALL_UNITS:
      return ({
        ...state,
        isPending: false,
        units: action.payload
      });
    case ConstantsActionTypes.UPDATE_VICTIM_PROFILE_START:
      return ({
        ...state,
        isPending: true
      });
    case ConstantsActionTypes.UPDATE_VICTIM_PROFILE_SUCCESS:
      return ({
        ...state,
        isPending: false,
        message: action.payload
      });
    case ConstantsActionTypes.UPDATE_VICTIM_PROFILE_FAILED:
      return ({
        ...state,
        isPending: false,
        errorMessage: action.payload
      });
    case ConstantsActionTypes.RESET_VICTIM_UPDATE:
      return ({
        ...state,
        message: null
      });
    case ConstantsActionTypes.SEND_RESPONSE_UNIT_LOCATION_START:
      return ({
        ...state,
        sendLocation: true
      });
    case ConstantsActionTypes.SEND_RESPONSE_UNIT_LOCATION_SUCCESS:
      return ({
        ...state,
        sendLocation: action.payload
      });
    case ConstantsActionTypes.SEND_RESPONSE_UNIT_LOCATION_FAILED:
      return ({
        ...state,
        sendLocation: action.payload
      });
    default:
      return state;
  }
};

export default responseReducer;
