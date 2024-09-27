import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_TRANSFERS = gql`
  query GetTransfers {
    transfers(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
      id
      from
      to
      value
      blockTimestamp
    }
  }
`;

function Transfers() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="transfers">
      <h2>Recent Transfers</h2>
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
          {data.transfers.map((transfer) => (
            <tr key={transfer.id}>
              <td>{transfer.from}</td>
              <td>{transfer.to}</td>
              <td>{transfer.value}</td>
              <td>{new Date(transfer.blockTimestamp * 1000).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transfers;
