import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import user from "./components/Data/user.json";
import statisticalData from "./components/Data/statistical-data.json";


function App() {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats:" options={statisticalData} />;
    </div>
  );
}

export default App;
