import React, { useEffect } from 'react';
import {useSession, signIn, signOut} from "next-auth/react";
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({children}) => {
  const {data: session, status} = useSession();
  console.log('session: ', session)

  // const setAppTheme = () => {
  //   const darkMode = localStorage.getItem('theme') === 'dark';
  //   const lightMode = localStorage.getItem('theme') === 'light';

  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else if (lightMode) {
  //     document.documentElement.classList.remove('dark');
  //   }
  //   return;
  // };

  // const handleSystemThemeChange = () => {
  //   var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  //   darkQuery.onchange = (e) => {
  //     if (e.matches) {
  //       document.documentElement.classList.add('dark');
  //       localStorage.setItem('theme', 'dark');
  //     } else {
  //       document.documentElement.classList.remove('dark');
  //       localStorage.setItem('theme', 'light');
  //     }
  //   };
  // };

  // useEffect(() => {
  //   setAppTheme();
  // }, []);

  // useEffect(() => {
  //   handleSystemThemeChange();
  // }, []);

  return (
    <>
      <Header
          onSignIn={signIn}
          onSignOut={signOut}
          session={session}
      />
      <div className="px-4 py-4">
        {children}
      </div>
      <Footer />
    </>
  );
}
