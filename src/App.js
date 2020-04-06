import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";

//import { ApolloProvider } from "react-apollo";
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { render } from 'react-dom';
// import gql from 'graphql-tag';
import { gql } from "apollo-boost";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
