import axios from "axios";
import { createContext, useState } from "react";

const ConcertContext = createContext();

function Provider({ children }) {
  const [concerts, setConcerts] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [artistName, setArtistName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState(`https://picsum.photos/seed/123432/300/200`);
  const [age, setAge] = useState(true);
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
  
  const fetchConcerts = async () => {
    const responce = await axios.get("http://127.0.0.1:3001/data");
    setConcerts(responce.data);
  };
  const deleteConcerts = async (id)=>{
    await axios.delete(`http://127.0.0.1:3001/data/${id}`)
    const updatedConcerts = concerts.filter((item)=>{
        return item.id !== id
    })
    setConcerts(updatedConcerts)
  }
  const updateConcerts =async(id, newname, newlocation, newartistName, newprice, newage, newdate, newUrl)=>{
    const responce =await axios.put(`http://127.0.0.1:3001/data/${id}`,{
        name: newname,
        location: newlocation,
        artistName: newartistName,
        price: newprice,
        age: newage,
        date: newdate,
        url: newUrl
    })
    const updatedConcerts = concerts.map((data)=>{
        if(data.id ===id){
            return {...data, ...responce.data}
        }
        return data
    })
    setConcerts(updatedConcerts)
  }

  const valuesToShare = {
    concerts,
    name,
    setName,
    date,
    setDate,
    location,
    setLocation,
    artistName,
    price,
    age,
    url,
    setUrl,
    setArtistName,
    setAge,
    setPrice,
    isOpen,
    setIsOpen,
    createConcert,
    fetchConcerts,
    deleteConcerts,
    updateConcerts
  };
  return (
    <ConcertContext.Provider value={valuesToShare}>
      {children}
    </ConcertContext.Provider>
  );
}
export { Provider };
export default ConcertContext;
