
import { Box } from '../Box';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics} from '../Statistics/Statistics';
import { FriendList} from '../FriendList/FriendList';
import {TransactionHistory} from '../TransactionHistory/TransactionHistory';

export const App =()=>{
 return (
  <Box as='div' p={15}>
    <Box as='h2' mb={20}>1.Profile</Box>
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
<Box as='h2' mb={20} mt={40}>2.Statistics</Box>
<Statistics stats={data} />
<Box as='h2' mb={20} mt={40}>3.Friends</Box>
<FriendList friends={friends} />
<Box as='h2' mb={20} mt={40}>4.TransactionHistory</Box>
<TransactionHistory items={transactions} />
</Box>


 );
};
