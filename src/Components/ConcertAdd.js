import { useContext } from "react";
import ConcertContext from "./concerts";
import Popup from "./Popup";
import "./edit.css";
export function ConcertAdd() {
  const {
    isOpen,
    setIsOpen,
    name,
    date,
    location,
    artistName,
    price,
    age,
    setName,
    setDate,
    setArtistName,
    setLocation,
    setPrice,
    setAge,
    createConcert,
    url,
    setUrl,
  } = useContext(ConcertContext);
  const togglePopup = () => {
    setIsOpen(!isOpen);
    setAge(false);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleArtistName = (event) => {
    setArtistName(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleUrl = (event) => {
    setUrl(event.target.value);
  };
  const handleage = () => {
    setAge((p) => !p);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createConcert(name, location, artistName, price, age, date, url);
    setName("");
    setArtistName("");
    setLocation("");
    setPrice("");
    setAge(false);
    togglePopup();
  };
  return (
    <div className="form__group field">
      <input
        className="btn"
        type="button"
        value="kayıt ekleme"
        onClick={togglePopup}
      />
      <p>kayıt ekleme butonunun altı.</p>
      {isOpen && (
        <Popup
          content={
            <>
              <b>Konser ekleme sayfası</b>
              <p>kayıt için gerekli bilgiler kısmı</p>
              <div>
                <label>title</label>
                <input
                  className="form__field"
                  type="text"
                  placeholder="etkinlik adı"
                  value={name}
                  onChange={handleName}
                />
                <br />
                <label>date</label>
                <input
                  className="form__field"
                  type="date"
                  placeholder="tarih"
                  onSelect={handleDate}
                />
                <br />
                <label>artist name</label>
                <input
                  className="form__field"
                  type="text"
                  placeholder="sanatçı adı"
                  value={artistName}
                  onChange={handleArtistName}
                />
                <br />
                <label>location</label>
                <input
                  className="form__field"
                  type="text"
                  placeholder="lokasyon"
                  value={location}
                  onChange={handleLocation}
                />
                <br />
                <label>price</label>
                <input
                  className="form__field"
                  type="text"
                  placeholder="ücret"
                  value={price}
                  onChange={handlePrice}
                />
                <br />
                <label>image URL</label>
                <input
                  className="form__field"
                  type="text"
                  placeholder="url"
                  value={url}
                  onChange={handleUrl}
                />
                <br />
                <p>
                  yaş sınırı olacak mı
                  <input type="checkbox" onChange={handleage} />
                </p>
                <button className="btn" onClick={handleSubmit}>
                  kayıt ekle
                </button>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
