import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icons: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icons: <MdIcons.MdDashboard />,
    cName: 'nav-text',
  },
  {
    title: 'Photos',
    path: '/photos',
    icons: <MdIcons.MdPhotoSizeSelectActual />,
    cName: 'nav-text',
  },
];
