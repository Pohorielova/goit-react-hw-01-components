


import { Box } from './Box';
import user from 'user.json';
import { Profile } from './Profile/Profile';


export const App =()=>{
 return (
  <Box as='section' p={15}>
    <h2>1.Profile</h2>
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  views={user.stats.views}
  followers={user.stats.followers}
  likes={user.stats.likes}
/>
</Box>

 );
};
