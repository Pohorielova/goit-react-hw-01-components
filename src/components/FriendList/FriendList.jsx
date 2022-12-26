import PropTypes from 'prop-types';
import { Box } from '../Box';
import { StatsEl, Avatar, Name, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Box as="ul" display="flex" gridGap={20} flexWrap="wrap">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <StatsEl key={id}>
          <Status isOnline={isOnline}>{isOnline}</Status>
          <Avatar src={avatar} alt="User avatar" width="30" />
          <Name>{name}</Name>
        </StatsEl>
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
