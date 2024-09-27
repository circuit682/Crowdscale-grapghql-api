// src/App.js

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloclient';  // Apollo client setup
import Dashboard from './components/dashboard'; // Importing the Dashboard component
import './App.css'; // Ensuring CSS is linked

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Dashboard /> {/* Rendering the new dashboard layout */}
      </div>
    </ApolloProvider>
  );
}

export default App;
