import React, { useState } from "react";
import Header from "../Components/Header";
import Category from "../Components/Category";
import Body from "../Components/Body";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Header onDarkModeToggle={handleDarkModeToggle} />
      <Category isDarkMode={isDarkMode} />
      <Body isDarkMode={isDarkMode} />
    </>
  );
}

export default Home;
