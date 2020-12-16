import React from 'react';
import styled from 'styled-components';

function Form({ values, submit, change, disabled, errors }) {
  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <div className='errors'>
        <h2>Add new user:</h2>
        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.pass}</div>
        </div>
      </div>
      <div className='inputs'>
        <label>
          Name
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>
          Email
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            name='pass'
            value={values.pass}
            onChange={onChange}
          />
        </label>
        <label>
          Did you read the TOS?
          <input
            type='checkbox'
            name='tos'
            checked={values.tos}
            onChange={onChange}
          />
        </label>
        <button disabled={disabled}>Add</button>
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin: 5px 0;
    display: flex;
  }
`;

export default Form;
