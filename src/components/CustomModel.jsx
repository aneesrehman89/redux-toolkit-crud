import React from 'react';
import './CustomModel.css';
import { useSelector } from 'react-redux';

const CustomModel = ({popupId,showPopUp,setShowPopUp}) => {
  const { user } = useSelector((state)=> state.app );
  return (
    <div className='modalBackground'>
      <div className='modalContainer d-flex flex-column justify-content-center align-items-center'>
        {user
          .filter((ele, index) => ele.id === popupId)
          .map((ele) => (
            <div className='w-100' key={ele.id}>
              <div className='card w-100 text-center'>
                <div className='card-body w-100   '>
                  <h5 className='card-title'>Name: {ele.name}</h5>
                  <p className='card-text'>Gender: {ele.gender}</p>
                </div>
              </div>
            </div>
          ))}
          <button className='w-50 mt-3 ' onClick={()=>setShowPopUp(false)}>Close</button>
      </div>
    </div>
  );
};

export default CustomModel;
