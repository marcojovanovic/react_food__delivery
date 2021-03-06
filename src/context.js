import React, { createContext, useState } from 'react';
import { products } from './data/data';
import { orderFirestore } from './firebase/config';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import Notification from './components/Notification.js';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('Ime i Prezime mora imati bar 3 slovna karaktera')
    .min(3),
  address: yup
    .string()
    .required('Adresa mora imati bar 3 slovna karaktera')
    .min(3),
  telephone: yup.number().required(),
  orders: yup.string().required('Pravilno popunite polje porudzbina'),
});

export const FoodContext = createContext(); // izvoz za komponente

const FoodProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [foodItems, setFoodItems] = useState(products);
  const [menuItems, setMenuItems] = useState(products);
  const [sidebar, setSidebar] = useState(false);
  const [loading, setLoading] = useState(false);

  // Location

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 44.61909788,
    longitude: 21.1765210699899,
    zoom: 13,
    pitch: 50,
  });

  const [showPopup, togglePopup] = React.useState(false);

  const navControlStyle = {
    right: 10,
    top: 10,
  };

  // Dark Mode main page

  const LightTheme = {
    pageBackground: '#f5f5f5',
    linkColor: '#333',
    divColor: '#e22255',
    toggleColor: '#e22255',
    sideColor: 'white',
  };

  const DarkTheme = {
    pageBackground: '#333',
    linkColor: '#f5f5f5',
    divColor: '#bc3e5f',
    toggleColor: '#bc3e5f',
    sideColor: 'rgba(0,0,0,0.3)',
  };

  const themes = {
    light: LightTheme,
    dark: DarkTheme,
  };

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const icon = theme === 'dark' ? <HiMoon size={40} /> : <CgSun size={40} />;

  // sidebar toggle function

  const bringBackSide = () => {
    setSidebar(!sidebar);
  };

  // Product page filtering

  const categories = ['all', foodItems.map((item) => item.category)].flat();

  const uniqueCategories = Array.from(new Set(categories));

  const filtered = (buttonValue) => {
    if (buttonValue === 'all') {
      setMenuItems(products);
    } else {
      let filteredItems = foodItems.filter(
        (item) => item.category === buttonValue
      );

      setMenuItems(filteredItems);
    }
  };

  // Firebase contact

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // contact page notification

  const notify = () => toast(<Notification />);

  // push contact information to firestore

  const pushToFirebase = async (data) => {
    await orderFirestore
      .collection('orders')
      .add({
        ...data,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    notify();
    reset();
  };

  return (
    <FoodContext.Provider
      value={{
        LightTheme,
        DarkTheme,
        themes,
        theme,
        setTheme,
        menuItems,
        uniqueCategories,
        filtered,
        viewport,
        setViewport,
        showPopup,
        togglePopup,
        navControlStyle,
        pushToFirebase,
        toast,
        ToastContainer,
        register,
        errors,
        handleSubmit,
        icon,
        changeTheme,
        sidebar,
        setSidebar,
        bringBackSide,
        loading,
        setLoading,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export { FoodProvider }; // izvoz za index.js
