import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow dark:bg-gray-800 dark:border-gray-600">
      <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      ©{new Date().getFullYear()}
      <a href="https://sl-filmfeista.netlify.app" className="hover:underline">&nbsp;FilmFeista&trade;</a>. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
