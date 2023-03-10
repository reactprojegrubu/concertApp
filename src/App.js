import { Search } from "./Components/search";
import { ConcertAdd } from "./Components/ConcertAdd";
import { useContext, useEffect } from "react";
import ConcertContext from "./Components/concerts";

function App() {
  const { fetchConcerts, concerts } = useContext(ConcertContext);

  useEffect(() => {
    fetchConcerts();
  }, []);

  return (
    <div>
      <h1>hello world</h1>
      <h1>concert app</h1>
      <Search details={concerts} />

      <ConcertAdd />
    </div>
  );
}

export default App;
