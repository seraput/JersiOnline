import React from 'react';
import {IconPassword, IconEdit, IconHistory, IconLogout} from '../../assets';

export const dummyMenu = [
  {
    id: 1,
    nama: 'Edit Profile',
    gambar: <IconEdit />,
    halaman: 'editProfile',
  },
  {
    id: 2,
    nama: 'Change Password',
    gambar: <IconPassword />,
    halaman: 'editPassword',
  },
  {
    id: 3,
    nama: 'History Pemesanan',
    gambar: <IconHistory />,
    halaman: 'historyPesanan',
  },
  {
    id: 4,
    nama: 'Sign Out',
    gambar: <IconLogout />,
    halaman: 'login',
  },
];
