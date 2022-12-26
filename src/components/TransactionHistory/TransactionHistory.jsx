import { Box } from '../Box';
import PropTypes from 'prop-types';
import { Thead, Tr, Td } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Box
      as="table"
      width={350}
      background="white"
      borderRadius={6}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    >
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </tbody>
    </Box>
  );
};
TransactionHistory.prototype = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
