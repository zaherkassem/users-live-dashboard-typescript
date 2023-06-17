import React from 'react';
import { useDispatch } from 'react-redux';
import { USERS } from '../../constants/entity';
import * as crudAction from '../../actions/crudAction';
import SignUpForm from '../../components/auth/SignUpForm';

const SignUpContainer = () => {
  const dispatch = useDispatch() as any;

  const submitForm = (formProps:any) => {
    dispatch(crudAction.submitForm(USERS, formProps, 0));
  };

  return <SignUpForm onSubmit={submitForm} />;
};

export default SignUpContainer;
