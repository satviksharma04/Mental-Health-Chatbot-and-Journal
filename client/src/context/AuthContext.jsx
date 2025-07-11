import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.withCredentials = true;

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const checkAuth = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/user/profile', {
        withCredentials: true
      });
      if (res.data.success) {
        setUserId(res.data.userId);
      } else {
        setUserId(null);
      }
    } catch (error) {
      setUserId(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await axios.get('http://localhost:4000/api/user/logout', {
      withCredentials: true
    });
    toast.success('Logged out successfully!');
    setUserId(null);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ userId, setUserId, showLogin, setShowLogin, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
