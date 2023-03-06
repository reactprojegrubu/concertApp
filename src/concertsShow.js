import { useState } from "react";
import { ConcertEdit } from "./concertEdit";
import { useContext } from "react";
import ConcertContext from "./concerts";

export function Concerts({ concert, deleteConcerts }) {
  const { setAge } = useContext(ConcertContext);
  const [showEdit, setShowEdit] = useState(false);

  const edit = () => {
    console.log("basıldı");
    setShowEdit((p) => !p);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  let content2;

  content2 = <>{concert.age ? " +18 yaş sınırı vardır" : "yaş sınırı yok"}</>;

  let content;
  if (showEdit) {
    content = <ConcertEdit concert={concert} onSubmit={handleSubmit} />;
  }
  return (
    <>
    <div className="ticket">
      
      <div className="left">
        <div className="image">
          <img className="image" src={concert.url} alt="asdc" />
        </div>
        <div className="ticket-info">
          <p className="date">
            <span>⏰: {new Date(concert.date).toDateString()}</span>
          </p>
          <div className="show-name">
            <h1>{concert.name}</h1>
            <h2>{concert.artistName}</h2>
           
          </div>
          <p className="location">
            <span>{content2}</span>
            <span className="separator">
              <i className="far fa-smile"></i>
            </span>
            <span>{concert.location}</span>
          </p>
        </div>
      </div>
      <div className="right">
        <p className="admit-one">
          <span>ADMIT ONE</span>
          <span>ADMIT ONE</span>
          <span>ADMIT ONE</span>
        </p>
        <div className="right-info-container">
          <div className="show-name">
            <h1>
              {concert.price}
              {" tl"}
            </h1>
          </div>
          <div className="time">
            <p>
              8:00 PM <span>TO</span> 11:00 PM
            </p>
            <p>
              DOORS <span>@</span> 7:00 PM
            </p>
          </div>
          <div>
            <button
              className="button-55"
              onClick={() => deleteConcerts(concert.id)}
            >
              delete
            </button>
            <button className="button-55" onClick={edit}>
              edit
            </button>
           
          </div>
        </div>
      </div>
      
    </div>
    <div className="editButton">
            {content}
            </div>
    </>
  );
}
