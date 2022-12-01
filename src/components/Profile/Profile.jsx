import PropTypes from 'prop-types';
import {Avatar, Name, UserDesc, StatsEl, Label, Quantity } from './Profile.styled';
import { Box } from '../Box';
export const Profile =({username, tag, location, avatar, followers, views, likes })=>{
 return <Box as='div'  width={249} background='white' borderRadius={6} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px;'>
 <Box as='div' p={25} display='flex' alignItems='center' flexDirection='column' >
   <Avatar
    src={avatar}
     alt="User avatar"
     size = "35px"

   />
   <Name >{username}</Name>
  <UserDesc >@{tag}</UserDesc>
  <UserDesc>{location}</UserDesc>
 </Box>

 <Box as='ul' display='flex' borderRadius={6}>
   <StatsEl>
     <Label >Followers</Label>
     <Quantity >{followers}</Quantity>
   </StatsEl>
   <StatsEl>
     <Label >Views</Label>
     <Quantity>{views}</Quantity>
   </StatsEl>
   <StatsEl>
     <Label>Likes</Label>
     <Quantity>{likes}</Quantity>
   </StatsEl>
 </Box>
</Box>;
};

Profile.propTypes={
  username:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats:PropTypes.shape({
  views:PropTypes.number.isRequired,
  followers:PropTypes.number.isRequired,
  likes:PropTypes.number.isRequired,
  }),
};
