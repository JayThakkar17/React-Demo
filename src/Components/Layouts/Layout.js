import React, { useState } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';

import { SidebarData } from '../Sidebar/SidebarData';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Home from '../Pages/Home/Home';
import Photos from '../Pages/Photos/Photos';
import Roles from '../Pages/Roles/Roles';
import CreateNewUser from '../../Components/User/CreateNew/CreateNewUser';
import UpdateRole from '../../Components/User/UpdateRole/UpdateRole';
import AuthUser from '../HOC/AuthUser';

import { logout } from '../../Store/Actions/loginActions';

import './Layout.css';

function Layout() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('firstName');
    dispatch(logout());
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

        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/photos' component={Photos} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/roles' component={Roles} />
          <Route exact path='/roles/create' component={CreateNewUser} />
          <Route exact path='/roles/update/:id' component={UpdateRole} />
        </Switch>
      </IconContext.Provider>
    </>
  );
}

export default AuthUser(Layout);
