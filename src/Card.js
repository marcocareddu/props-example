import React from "react";

const Card = (props) => {
  return (
    <article className="col-3 d-flex flex-column justify-content-center align-items-center">
      <img src={props.url} alt="immagine di card" className="img-fluid" />
      <div className="text-center w-100">
        <h6>{props.title}</h6>
        <div className="divisore my-3"></div>
        <h5 className="price fw-bold">{props.price}</h5>
        <h6>{props.username}</h6>
        <p className="timer fw-bold">00:05</p>
        <div className="puntata">PUNTA</div>
      </div>
    </article>
  );
};

export default Card;
