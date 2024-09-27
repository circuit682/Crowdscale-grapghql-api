import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import './TokenData.css'; // Import your CSS styles

const GET_TOKEN_DATA = gql`
  {
    updatedTokenInformations(first: 5) {
      id
      newName
      newSymbol
      blockNumber
    }
    upgrades(first: 5) {
      id
      _from
      _to
      _value
    }
  }
`;

const TokenData = () => {
  const { loading, error, data } = useQuery(GET_TOKEN_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="dashboard-section">
      <h2>Token Information</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>New Name</th>
            <th>New Symbol</th>
            <th>Block Number</th>
          </tr>
        </thead>
        <tbody>
          {data.updatedTokenInformations.map((token) => (
            <tr key={token.id}>
              <td>{token.id}</td>
              <td>{token.newName}</td>
              <td>{token.newSymbol}</td>
              <td>{token.blockNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Upgrades</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.upgrades.length > 0 ? (
            data.upgrades.map((upgrade) => (
              <tr key={upgrade.id}>
                <td>{upgrade.id}</td>
                <td>{upgrade._from}</td>
                <td>{upgrade._to}</td>
                <td>{upgrade._value}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No upgrades available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TokenData;
