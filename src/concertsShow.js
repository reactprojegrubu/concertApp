import { useState } from "react";
import { ConcertEdit } from "./concertEdit";
import { useContext } from "react";
import ConcertContext from "./concerts";

export function Concerts({ concert, deleteConcerts }) {
  const { age } = useContext(ConcertContext);
  const [showEdit, setShowEdit] = useState(false);

  const edit = () => {
    console.log("basıldı");
    setShowEdit(p => !p);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  let content2;

  content2 = <>{concert.age ? " 🔞+18 yaş sınırı vardır" : "yaş sınırı yok"}</>;

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
            <span>📍:{concert.location}</span>
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
          <div class="barcode">
				<img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code"/>
			</div>
			<p class="ticket-number">
				#20030220
			</p>
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
