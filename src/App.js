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
    <div >
     <h1>hello world</h1>
     <h1>concert app</h1>
     <Search details={concerts} />
     
     <ConcertAdd />
     
    </div>
    
  );
}

export default App;
