import "./edit.css";
import { useContext, useState } from "react";
import ConcertContext from "./concerts";
export function ConcertEdit({ concert, onSubmit }) {
  const { updateConcerts } = useContext(ConcertContext);
  const [title, setTitle] = useState(concert.name);
  const [location, setLocation] = useState(concert.location);
  const [artistName2, setArtistName2] = useState(concert.artistName);
  const [price, setPrice] = useState(concert.price);
  const [age, setAge] = useState(concert.age);
  const [date, setDate] = useState(concert.date);
  const [url, setUrl] = useState(concert.url);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleArtistName = (event) => {
    setArtistName2(event.target.value);
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
  const handleAge = (event) => {
    console.log(event.target);
    setAge(event.target.checked);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    updateConcerts(
      concert.id,
      title,
      location,
      artistName2,
      price,
      age,
      date,
      url
    );
  };
  return (
    <div className="form__group field">
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          className="form__field"
          type="input"
          name="name"
          id="name"
          value={title}
          onChange={handleChange}
        />
        <label>date</label>
        <input
          type={"date"}
          className="form__field"
          value={date}
          onChange={handleDate}
        />
        <label>artist name</label>
        <input
          className="form__field"
          value={artistName2}
          onChange={handleArtistName}
        />
        <label>location</label>
        <input
          className="form__field"
          value={location}
          onChange={handleLocation}
        />
        <label>price</label>
        <input className="form__field" value={price} onChange={handlePrice} />
        <label>image URL</label>
        <input className="form__field" value={url} onChange={handleUrl} />
        <div>
          yaş sınırı{" "}
          <input
            id="_checkbox"
            type={"checkbox"}
            checked={age}
            onChange={handleAge}
          />
        </div>
        <button className="btn">save</button>
      </form>
    </div>
  );
}
