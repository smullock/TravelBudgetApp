import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from '@apollo/client';
import "./App.css";
import { Button } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css'
import { setContext } from '@apollo/client/link/context';



import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

import Header from './Components/Header';
import ItemList from './Components/ItemList';
import ItemFormModal from './Components/ItemFormModal';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {


  return (
    

<ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          
          <div className="container">
          
            <Routes>
              <Route 
                path="/"
                element={<ProtectedRoute><Home /></ProtectedRoute>}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/register" 
                element={<Register />}
              />
              
            </Routes>
          </div>
      
        </div>
      </Router>
    </ApolloProvider>




  );
}
export function ProtectedRoute({ children }) {
  const token = localStorage.getItem('id_token');
  return token ? children : <Navigate to="/login" />;
}

export default App;
