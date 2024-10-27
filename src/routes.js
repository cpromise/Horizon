import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import { DiApple } from "react-icons/di";

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Talk iOS Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={DiApple} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  }
];

export default routes;
