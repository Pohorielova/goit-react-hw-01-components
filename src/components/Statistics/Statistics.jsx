import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Title, StatsEl, Label, Percentage } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Box
      as="section"
      width={400}
      display="flex"
      alignItems="stretch"
      flexDirection="column"
      background="white"
      borderRadius={6}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    >
      {title && <Title>{title}</Title>}
      <Box
        as="ul"
        display="flex"
        justifyContent="space-around "
        borderRadius={6}
      >
        {stats.map(({ id, label, percentage }) => (
          <StatsEl key={id} style={{ backgroundColor: randomHexColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatsEl>
        ))}
      </Box>
    </Box>
  );
};

function randomHexColor() {
  return `#${Math.floor(Math.random() * 12777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
