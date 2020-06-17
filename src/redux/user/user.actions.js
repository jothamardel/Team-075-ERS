import ConstantsActionTypes from './user.constants';
import subscribeUser from '../../pushSubscription';


export const setCurrentUser = (user) => ({
  type: ConstantsActionTypes.SET_CURRENT_USER,
  payload: user
});

// export const subscriptionStatus = () => ({ type: ConstantsActionTypes.SUBSCRIPTION_STATUS });

export const loginUserStartAsync = (email, password, api) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.LOGIN_USER_START,
    payload: true
  });
  fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then((response) => {
      dispatch({
        type: ConstantsActionTypes.LOGIN_USER_SUCCESS,
        payload: response.status
      });
      return response.json();
    }).then((data) => {
      dispatch({
        type: ConstantsActionTypes.LOAD_USER,
        payload: data
      });
      subscribeUser(data.user._id, data.token);
      return data;
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.LOGIN_USER_FAILED,
        payload: error.message
      });
    });
};

export const logoutUser = () => ({
  type: ConstantsActionTypes.LOGOUT_USER,
  payload: true
});
// /auth/facebook/https://emresys.herokuapp.com/api/auth/facebook/  ${process.env.REACT_APP_API_URL}/auth/facebook/
export const facebookLogin = () => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.FACEBOOK_LOGIN_START,
    payload: true
  });
  fetch(`https://emresys.herokuapp.com/api/auth/facebook/`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
    // body: JSON.stringify({
    //   email,
    //   password
    // })
  })
    .then((response) => {
      dispatch({
        type: ConstantsActionTypes.FACEBOOK_LOGIN_SUCCESS,
        payload: response.status
      });
      return response.json();
    }).then((data) => {
      dispatch({
        type: ConstantsActionTypes.LOAD_USER,
        payload: data
      });
      // subscribeUser();
      return data;
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.FACEBOOK_LOGIN_FAILED,
        payload: error.message
      });
    });
};


export const signUpUserStartAsync = (
  name, email, phoneNo, password
) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.SIGN_UP_USER_START,
    payload: true
  });

  fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name.toString(),
      email: email.toString(),
      phoneNo: phoneNo.toString(),
      password: password.toString()
    })
  })
    .then((data) => {
      dispatch({
        type: ConstantsActionTypes.SIGN_UP_USER_SUCCESS,
        payload: data.status
      });
      return data.json();
    }).then((user) => {
      dispatch({
        type: ConstantsActionTypes.LOAD_USER,
        payload: user
      });
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.SIGN_UP_USER_FAILED,
        payload: error.message
      });
    });
};

export const getUserProfile = (id, token) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.GET_USER_PROFILE_START
  });

  const bearer = `Bearer ${token}`;
  fetch(`${process.env.REACT_APP_API_URL}/auth/profile/${id}`, {
    method: 'get',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      dispatch({
        type: ConstantsActionTypes.GET_USER_PROFILE_SUCCESS,
        payload: response.status
      });
      return response.json();
    })
    .then((data) => {
      dispatch({
        type: ConstantsActionTypes.LOAD_USER,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.GET_USER_PROFILE_FAILED,
        payload: error.message
      });
    });
};
