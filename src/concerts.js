import { createContext, useState } from "react";

const ConcertContext = createContext();

function Provider({ children }){
    const [concerts, setConcerts] = useState([]);
    const [name, setName] = useState("konser 1")
    const [location, setLocation] = useState("")
    const [artistName, setArtistName] = useState("")
    const [price, setPrice] = useState("")
    const [age, setAge] = useState("")
    const [isOpen, setIsOpen] = useState(false);

    const createConcert = async (name, location,artistName, price,age, date,url) => {
        const responce = await axios.post("http://127.0.0.1:3001/data", {
          name: name,
          location,
          artistName,
          price,
          age,
          date,
          url
        });
        console.log(responce);
        const newConcerts = [...concerts, responce.data];
        setConcerts(newConcerts);
        console.log(concerts);
      };


    const valuesToShare={
        name,
        setName,
        location,
        setLocation,
        artistName,
        price,
        age,
        setArtistName,
        setAge,
        setPrice,
        isOpen,
        setIsOpen,
        createConcert
    }
    return <ConcertContext.Provider value={valuesToShare}>{children}</ConcertContext.Provider>
}
export {Provider}
export default ConcertContext