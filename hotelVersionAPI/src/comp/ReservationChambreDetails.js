import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReservationChambreDetails = () => {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {

    axios.get(`https://localhost:7172/api/Chambre/${id}?numerochambre=${id}`)
      .then((result) => {
        setRoomDetails(result.data);
      })
      .catch((error) => {
        console.log("Error fetching room details:", error);
      });
  }, [id]);

  return (
    <div>
      {roomDetails ? (
        <>
          <h2>Details of the Chambre {id}</h2>
          {/* Display room details based on roomDetails */}
          <p>Numero Chambreeee: {roomDetails.numeroChambre}</p>
          <p>Etat: {roomDetails.etat}</p>
          <p>Type Chambre: {roomDetails.typeChambre}</p>
          {/* Add other details based on your data structure */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ReservationChambreDetails;
