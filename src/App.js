import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(" https://api.coinpaprika.com/v1/tickers?limit=10").then(response =>
      response.json())
      .then((json) => console.log(json));
  }, [])

  

  return <div>
    <h1>The Coins</h1>
    {loading ? <strong>Loading ...</strong> : null}
  </div>
}

export default App;
