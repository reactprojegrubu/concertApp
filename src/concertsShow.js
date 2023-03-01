import { useContext } from "react"
import ConcertContext from "./concerts"

export function Concerts(){
    const {name} = useContext(ConcertContext)
    return(
        <div className="book-show">
            <h3>{name}</h3>
            <img src={`https://picsum.photos/seed/123432/300/200`} alt="asdc" />
            <button className="delete" >delete</button>
            <button className="edit" >edit</button>
        </div>
    )
}