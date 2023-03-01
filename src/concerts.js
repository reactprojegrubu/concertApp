import { createContext, useState } from "react";

const ConcertContext = createContext();

function Provider({ children }){
    const [name, setName] = useState("konser 1")
    const [location, setLocation] = useState("")
    const [artistName, setArtistName] = useState("")
    const [price, setPrice] = useState("")
    const [age, setAge] = useState("")
    const [isOpen, setIsOpen] = useState(false);


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
        setIsOpen
    }
    return <ConcertContext.Provider value={valuesToShare}>{children}</ConcertContext.Provider>
}
export {Provider}
export default ConcertContext