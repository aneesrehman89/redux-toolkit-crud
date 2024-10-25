import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Update } from '../features/UserdetailSlice';

const UpdateUser = () => {
  const { id } = useParams();
  const [updateData, setupdateData] = useState({});
  const { user, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      const singleUser = user.filter((ele) => ele.id === id);
      setupdateData(singleUser[0]);
    }
  }, [id]);
  // console.log(updateData)

  const newData = (e) => {
    setupdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const submitUpdate = (e) => {
    e.preventDefault();
    dispatch(Update(updateData));
    navigate('/read')
  };

  return (
    <div className='w-100'>
      <h2 className='text-center mt-4'>Edit the data</h2>

      <form className='w-50 mx-auto my-4' onSubmit={submitUpdate}>
        <div className='mb-3'>
          <label className='mb-2' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            name='name'
            className='form-control'
            value={updateData && updateData.name}
            onChange={newData}
          />
        </div>
        <div className='mb-3'>
          <label className='mb-2' htmlFor='email'>
            Email
          </label>
          <input
            type='text'
            name='email'
            className='form-control'
            value={updateData && updateData.email}
            onChange={newData}
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
            value={updateData && updateData.age}
            onChange={newData}
          />
        </div>
        <div className='form-check p-0'>
          <input
            type='radio'
            name='gender'
            value='Male'
            checked={updateData && updateData.gender === 'Male'}
            onChange={newData}
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
            checked={updateData && updateData.gender === 'Female'}
            onChange={newData}
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

export default UpdateUser;
