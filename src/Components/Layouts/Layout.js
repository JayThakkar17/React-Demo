import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { SidebarData } from '../Sidebar/SidebarData';
import { IconContext } from 'react-icons';

import './Layout.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../Store/Actions/loginActions';

function Dashboard() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('firstName');
    // dispatch(logout());
    history.push('/login');
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='dashboard'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icons}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <button
              onClick={logoutHandler}
              style={{
                color: '#4dd637',
                backgroundColor: 'white',
                fontSize: '24px',
              }}
            >
              LOGOUT
            </button>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Dashboard;
