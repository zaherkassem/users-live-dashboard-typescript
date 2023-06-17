import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';

import * as authService from '../../services/authService';
import LoginForm from '../../components/auth/LoginForm';

const LoginContainer = () => {
  // const errorMessage = useSelector((state:any) => state.auth.errorMessage) as any;
  const dispatch = useDispatch() as any;

  const submitForm = (formProps:any) => {
    dispatch(authService.login(formProps));
  };

  return <LoginForm onSubmit={submitForm} 
    // errorMessage={errorMessage} 
   />;
};

export default LoginContainer;
