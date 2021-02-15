import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import user from "./components/Data/user.json";
import statisticalData from "./components/Data/statistical-data.json";
import Container from "./components/container/Container";
import FriendList from "./components/FriendList/FriendList";
import friends from "./components/Data/friends.json"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/Data/transactions.json";

function App() {
  return (
    <Container>
      
      <Profile {...user} />
      <Statistics title="Upload stats:" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
