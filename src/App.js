import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import UserDetails from './UserDetails';
import UserPage from './UserPage';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <Header user={user} />
        <Route path="/" exact component={HomePage} />
        <Route path="/user" render={() => <UserPage user={user} />} />
      </div>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Hello, Usero!</h1>
      <Link to="/user">View User</Link>
    </div>
  );
};

export default App;

