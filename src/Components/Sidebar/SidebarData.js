import React from 'react';
import * as AiIcons from 'react-icons/ai'; 
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icons: <MdIcons.MdDashboard />,
    cName: 'nav-text',
  },
  {
    title: 'Home',
    path: '/home',
    icons: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Photos',
    path: '/photos',
    icons: <MdIcons.MdPhotoSizeSelectActual />,
    cName: 'nav-text',
  },
  {
    title: 'Roles',
    path: '/roles',
    icons: <FaIcons.FaCriticalRole />,
    cName: 'nav-text',
  },
];
