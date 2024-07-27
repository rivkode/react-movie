import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);

  };
  const onClick = () => setValue((prev) => prev + 1);
  
  console.log('i run all the time');

  useEffect(() => {
    console.log("i run only once");
  }, []);

  useEffect(() => {
    console.log("i run keyword changes");
  }, [keyword]);

  useEffect(() => {
    console.log("i run counter changes");
  }, [counter]);

  useEffect(() => {
    console.log("i run counter and keyword changes");
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="search here"/>
      <h1>{counter}</h1>
      <button onClick={onClick}> click me !</button>
    </div>
  );
}

export default App;
