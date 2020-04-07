import React, {Component} from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";

import { useQuery } from '@apollo/react-hooks';

// const client = new ApolloClient({
//   uri: 'http://localhost:5000/graphql',
// });

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

client
.query({
  query: gql`
    {
      rates(currency: "USD") {
        currency
      }
    }
  `
})
.then(result => console.log(result));

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const GET_TILES = gql`
{
  getTiles {
    data {
      id
    }
  }
}
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
