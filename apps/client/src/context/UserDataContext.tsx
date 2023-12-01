
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserData } from '../services/userService';

// Define the shape of the user data context
interface UserDataContextProps {
  userData: any; // Replace 'any' with your user data type
  setUserData: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with your user data type
}

// Create the context with a default value
const UserDataContext = createContext<UserDataContextProps>({
  userData: null,
  setUserData: () => {},
});

// Create a provider component
export const UserDataProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState(null); // Replace 'null' with your user data initial state

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// Create a custom hook to use the user data context
export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};
