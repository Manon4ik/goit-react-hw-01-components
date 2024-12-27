import Container from './Container/Container';
import Section from './Section/Section';

import Profile from '../components/Profile/Profile'
import user from '../components/Profile/user.json';

import Statistics from './Statistics/Statistics';
import data from '../components/Statistics/data.json';


import FriendList from './FriendList/FriendList';
import friends from '../components/FriendList/friends.json'


import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../components/TransactionHistory/transactions.json'

export const App = () => {
  return (
    <Container>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <Statistics stats={data} />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory items={transactions} />
      </Section>

    </Container>
  );
};
