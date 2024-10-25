import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchUser} from '../features/UserdetailSlice';
function Navbar() {
  const [searchData, setSearchData] = useState('');
  const dispatch = useDispatch()
  const allUsersCount = useSelector((state) => state.app.user);

  useEffect(() => {
          dispatch(searchUser(searchData))
  }, [searchData])
  

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid px-5 '>
          <h4 className='navbar-brand cursor-pointer'>RTK</h4>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav me-auto mb-2 w-50'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  create post
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/read' className='nav-link'>
                  All post ({allUsersCount.length})
                </Link>
              </li>
            </ul>
            <input
              className='form-control me-2 w-50'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onChange={(e)=>setSearchData(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
