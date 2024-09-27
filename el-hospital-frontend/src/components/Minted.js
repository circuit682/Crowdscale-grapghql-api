import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const GET_MINTED = gql`
  query GetMinted {
    minteds(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
      id
      receiver
      amount
      blockTimestamp
    }
  }
`;

function Minted() {
  const { loading, error, data } = useQuery(GET_MINTED);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="minted">
      <h2>
        <FontAwesomeIcon icon={faCoins} /> Recent Minted Tokens
      </h2>
      <table>
        <thead>
          <tr>
            <th>Receiver</th>
            <th>Amount</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.minteds.map((minted) => (
            <tr key={minted.id}>
              <td>{minted.receiver}</td>
              <td>{minted.amount}</td>
              <td>{new Date(minted.blockTimestamp * 1000).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Minted;
