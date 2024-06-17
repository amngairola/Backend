import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke, i) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>

          <p>{joke.content}</p>
        </div>
      ))}
      ;
    </>
  );
}

export default App;
