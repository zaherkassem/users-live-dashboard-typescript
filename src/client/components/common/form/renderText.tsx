import * as React from 'react';

interface IRenderTextPtops {
  input: any,
  label: string,
  name:  string,
  placeholder:  string,
  value: string, 
  meta: any
  type: string
};

const renderText = ({name, placeholder, input, label, type, meta: { touched,  invalid } } : IRenderTextPtops) => {
  return (
    <>
      <label htmlFor={name} className="input-label" hidden>{label}</label>
      <input  type={type} name={name} id={name} className="input-field" placeholder={placeholder}  error={touched && invalid}  {...input}  />
    </>
  )
};

export default renderText;
