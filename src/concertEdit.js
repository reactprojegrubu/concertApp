import Popup from './Popup'
import { useContext, useState } from 'react';
import ConcertContext from './concerts';

export function ConcertEdit({concert,onSubmit}){
    const {updateConcerts} = useContext(ConcertContext)
    const[title,setTitle]=useState(concert.name)
    const[location,setLocation]=useState(concert.location)
    const[artistName2,setArtistName2]=useState(concert.artistName)
    const[price,setPrice]=useState(concert.price)
    const[age,setAge]=useState(concert.age)
    const[date,setDate]=useState(concert.date)
    const[url,setUrl]=useState(concert.url)

    const handleChange=(event)=>{
      setTitle(event.target.value)
    }
    const handleDate=(event)=>{
      setDate(event.target.value)
  }
  const handleArtistName=(event)=>{
    setArtistName2(event.target.value)
  }
  const handleLocation=(event)=>{
    setLocation(event.target.value)
  }
  const handlePrice=(event)=>{
    setPrice(event.target.value)
  }
  const handleUrl=(event)=>{
    setUrl(event.target.value)
  }
  const handleAge=(event)=>{  
    setAge(event.target.checked)
  }
