import React, { useContext } from "react";
import ConcertContext from "./concerts";
import { Concerts } from "./concertsShow";
export function ConcertList({ filteredConcert }) {
  const { deleteConcerts } = useContext(ConcertContext);
  const mapedConcerts = filteredConcert.map((concert) => (
    <Concerts
      key={concert.id}
      concert={concert}
      deleteConcerts={deleteConcerts}
    />
  ));
  return <div>{mapedConcerts}</div>;
}
