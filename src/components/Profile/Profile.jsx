import PropTypes from 'prop-types';
import {Card, Avatar } from './Profile.styled';

export const Profile =({username, tag, location, avatar, followers, views, likes })=>{
 return <Card>
 <div>
   <Avatar
    src={avatar}
     alt="User avatar"
     class="avatar"
   />
   <p class="name">{username}</p>
  <p class="tag">@{tag}</p>
  <p class="location">{location}</p>
 </div>

 <ul class="stats">
   <li>
     <span class="label">Followers</span>
     <span class="quantity">{followers}</span>
   </li>
   <li>
     <span class="label">Views</span>
     <span class="quantity">{views}</span>
   </li>
   <li>
     <span class="label">Likes</span>
     <span class="quantity">{likes}</span>
   </li>
 </ul>
</Card>;
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
