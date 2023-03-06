import React, {useState} from "react";
import { ConcertList } from "./concertList";
import "./search.css"

 export function Search({ details }){
   
    const [searchField, setSearchField] = useState("");

    const filteredConcert = details.filter(
        person=>{
        return(person.name.toLowerCase().includes(searchField.toLowerCase()))
    }) 
    const handleChange= (e)=>{
        setSearchField(e.target.value)
    }

    function searchList() {
       return(
         <ConcertList filteredConcert={filteredConcert} />
       )
    }
    
    return (<>
      <div className="wrap" >
        <div className="search">
        <input type="text" className="searchTerm" placeholder="festival arayın..." onChange={handleChange} />
        </div>
      </div>
      <ConcertList filteredConcert={filteredConcert} />
      </>
    );
  }
