import { useEffect, createContext, useState } from "react";

const ThemeContextConsumer = createContext();

const colorThemes = {
  dark: () => "dark",
  light: () => "light"
};

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(colorThemes["dark"]());

  const determineUserPreference = () => {
    if(localStorage.schachteTheme) {
      return localStorage.schachteTheme
    }

    if (window.matchMedia) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        localStorage.setItem("schachteTheme", "dark")
        return 'dark';
      } else {
        localStorage.setItem("schachteTheme", "light")
        return 'light';
      }
    }
    localStorage.setItem("schachteTheme", "light")
    return 'light';
  }

  useEffect(() => {
    const userPref = determineUserPreference()
    setIsDark(userPref);
    let app = document.getElementsByTagName('BODY')[0]
    app.setAttribute('data-theme', userPref)
    let bodySelector = document.querySelector('body').classList
    bodySelector.remove('preload')
  }, [])

  const toggleDarkMode = () => {
    if (isDark === "dark") {
      setIsDark("light");
    } else {
      setIsDark("dark");
    }
  };

  return (
    <ThemeContextConsumer.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </ThemeContextConsumer.Provider>
  );
};

export { ThemeContextConsumer, ThemeContextProvider };
