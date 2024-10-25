import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUser, searchData } from '../features/UserdetailSlice';
import { useEffect } from 'react';
import CustomModel from './CustomModel';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Read = () => {
  const [id, setId] = useState();
  const [showPopUp, setShowPopUp] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser()); // calling function 'showUser'
  }, []);

  const { user, loading, searchData } = useSelector((state) => state.app);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {showPopUp ? (
        <CustomModel
          popupId={id}
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
        />
      ) : (
        ''
      )}
      <h4 className='text-center mt-4'>Read All Data</h4>
      {user &&
        user
          .filter((ele) => {
            if (searchData.length === 0) {
              return ele;
            } else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })

          .map((ele, index) => {
            return (
              <div className='w-100' key={ele.id}>
                <div className='card w-50 my-4 mx-auto text-center'>
                  <div className='card-body'>
                    <h5 className='card-title'>name : {ele.name}</h5>
                    <p className='card-text'>gender : {ele.gender}</p>
                    <button
                      className='text-center mx-2 px-2  '
                      onClick={() => [setId(ele.id), setShowPopUp(!showPopUp)]}
                    >
                      View
                    </button>
                    <Link
                      className='readLinks mx-2 px-2'
                      to={`/edit/${ele.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className='readLinks mx-2 px-2'
                      onClick={() => dispatch(deleteUser(ele.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default Read;
