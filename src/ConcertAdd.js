import { useContext } from 'react';
import ConcertContext from './concerts';
import Popup from './Popup'

export function ConcertAdd(){
    const {isOpen,setIsOpen} = useContext(ConcertContext)
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }

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
