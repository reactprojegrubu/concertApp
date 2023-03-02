import { useContext } from 'react';
import ConcertContext from './concerts';
import Popup from './Popup'

export function ConcertAdd(){
  const {isOpen,setIsOpen,name,date,location,artistName,price,age,setName,setDate,setArtistName,setLocation,setPrice,setAge,createConcert,url,setUrl} = useContext(ConcertContext)
  
  const togglePopup = () => {
      setIsOpen(!isOpen);
      setAge(false)
    }
  const handleName=(event)=>{
      setName(event.target.value)
  }
  const handleDate=(event)=>{
      setDate(event.target.value)
  }
  const handleArtistName=(event)=>{
    setArtistName(event.target.value)
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
  const handleage = () => { 
  
    setAge(p=>!p) 
    
  }; 

    return(
        <div>
            <input
      type="button"
      value="kayıt ekleme"
      onClick={togglePopup}
    />
    <p>kayıt ekleme butonunun altı.</p>
    {isOpen && <Popup
      content={<>
        <b>Konser ekleme sayfası</b>
        <p>kayıt için gerekli bilgiler kısmı</p>
        <input type="text" placeholder='konser adı' />
        <button>kayıt ekle</button>
      </>}
      handleClose={togglePopup}
    />}
        </div>
    )
}
