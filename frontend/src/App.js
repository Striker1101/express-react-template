import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK_END_URL}api`) // Use the environment variable
      .then((response) => {
        console.log("Backend response:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching from backend:", error);
      });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-background-dark text-text-dark"
          : "bg-background-light text-text-light"
      }`}
    >
      <header className="p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My React App</h1>
          <button
            onClick={toggleDarkMode}
            className="bg-primary-light dark:bg-primary-dark text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-light/80 dark:hover:bg-primary-dark/80 transition-colors"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to My React App
          </h2>
          <p className="text-lg">
            This is a simple introduction to the app. Explore the features and
            enjoy the seamless experience.
          </p>
        </div>
      </main>
      <footer className="bg-primary-light dark:bg-primary-dark text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} My React App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
