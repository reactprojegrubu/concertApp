import { Search } from "./search";
import { ConcertAdd } from "./ConcertAdd";
import { useContext, useEffect } from "react";
import ConcertContext from "./concerts";


function App() {
const {fetchConcerts,concerts} = useContext(ConcertContext)

  useEffect(()=>{
    fetchConcerts()
  },[])

  return (
    <div>
      <div className="header">
        <img className="logo" src="/best.jpg" alt="best logosu" />
        <div className="title-container">
          <h1 className="title">hello world</h1>
          <h1 className="title">concert app</h1>
        </div>
      </div>
      <Search details={concerts} />
      <ConcertAdd />
    </div>
    
  );
}

export default App;
