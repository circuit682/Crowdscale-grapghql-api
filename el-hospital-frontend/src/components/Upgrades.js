import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define the GraphQL query for fetching upgrades
const GET_UPGRADES = gql`
  query GetUpgrades {
    upgrades(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
      id
      _from
      _to
      _value
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;


function Upgrades() {
  const { loading, error, data } = useQuery(GET_UPGRADES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="upgrades">
      <h2>Recent Upgrades</h2>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.upgrades.map((upgrade) => (
            <tr key={upgrade.id}>
              <td>{upgrade._from}</td>
              <td>{upgrade._to}</td>
              <td>{upgrade._value.toString()}</td> {/* Converts BigInt to string */}
              <td>{new Date(upgrade.blockTimestamp * 1000).toLocaleString()}</td> {/* Formats timestamp */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Upgrades;
