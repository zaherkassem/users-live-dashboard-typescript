import * as React from 'react';
import './Popup.scss';

interface  IPopupProps {
  handleClose: (e? : any) => void
  children: React.ReactNode
}

const Popup = (props:IPopupProps) => {
  return (
    <>
      <div id="popup1" className="overlay">
        <div className="popup">
          <a className="close" onClick={props.handleClose}>
            &times;
          </a>
          <div className="content">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Popup;
