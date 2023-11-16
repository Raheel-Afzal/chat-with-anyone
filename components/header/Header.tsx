import React from "react";
import Logo from "./Logo";
import  DarkModeToggle  from "./DarkModeToggle";
import UserButton from "./UserButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row p-5 max-w-7xl items-center mx-auto">
        <Logo />
        <div className="flex flex-1 pt-5 items-center justify-end space-x-4">
          <DarkModeToggle/>
          <UserButton/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
