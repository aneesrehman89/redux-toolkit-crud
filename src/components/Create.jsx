import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/UserdetailSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const getUserData = (e) => {
    // handle user input
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // handle submit
    e.preventDefault();
    console.log("users ...",users);
    dispatch(createUser(users));
    navigate('/read')
  };

  return (
    <div className='w-100'>
      <h2 className='text-center mt-4'>Fill the data</h2>
      <form className='w-50 mx-auto my-4' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='mb-2' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            name='name'
            className='form-control'
            onChange={getUserData}
          />
        </div>
        <div className='mb-3'>
          <label className='mb-2' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            name='Email'
            className='form-control'
            onChange={getUserData}
          />
        </div>
        <div className='mb-3'>
          <label className='mb-2' htmlFor='age'>
            Age
          </label>
          <input
            type='text'
            name='age'
            className='form-control'
            onChange={getUserData}
          />
        </div>
        <div className='form-check p-0'>
          <input
            type='radio'
            name='gender'
            value='Male'
            onChange={getUserData}
          />
          <label className='form-check-label px-2' htmlFor='genderMale'>
            Male
          </label>
        </div>
        <div className='form-check p-0'>
          <input
            type='radio'
            name='gender'
            value='Female'
            onChange={getUserData}
          />
          <label className='form-check-label px-2' htmlFor='genderFemale'>
            Female
          </label>
        </div>
        <button type='submit' className='btn btn-primary my-4'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
