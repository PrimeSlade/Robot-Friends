import React from "react";

type CardProp = {
  id: number;
  name: string;
  email: string;
};

const Card = ({ id, name, email }: CardProp) => {
  return (
    <div
      className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
      data-testid="card"
    >
      <img src={`https://robohash.org/${id}?200*200`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
