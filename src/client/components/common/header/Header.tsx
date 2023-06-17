import React from 'react';
import { useDispatch } from 'react-redux';
import * as authService from '../../../services/authService';
import { getLocalStorage } from '../../../utils/storageUtil';
import { CURRENT_USER } from '../../../config/config';

const Header = () => {
  const currentUser = getLocalStorage(CURRENT_USER);
  const dispatch = useDispatch() as any;

  const logOut = (e:any) => {
    e.preventDefault();
    dispatch(authService.logout());
  };

  return (
    <div>
      <header className="header">
        <div className="header-wrapper">
          <div className="logo">Live Users</div>
          <div className="currentUser">{`Hi ${currentUser?.userName || ''}`}</div>
          <div className="logo" style={{ cursor: 'pointer' }} onClick={logOut}>
            Logout
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
