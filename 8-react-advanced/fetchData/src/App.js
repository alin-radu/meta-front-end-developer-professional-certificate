function App() {
  const [user, setUser] = React.useState([]);
  console.log('%c-> developmentConsole: user= ', 'color:#77dcfd', user);

  const URL = 'https://randomuser.me/api/?results=1';
  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: '40px' }}>
      <h1>Customer data</h1>
      <h2>Name: {user.name.first}</h2>
      <img src={user.picture.large} alt="User Picture" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
