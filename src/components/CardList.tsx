import React from "react";
import Card from "./Card";
import { Robot } from "../type/Types";

type CardListProps = {
  robots: Array<Robot>;
};

const CardList = ({ robots }: CardListProps) => {
  return robots.map((user, i) => {
    return <Card key={i} id={user.id} name={user.name} email={user.email} />;
  });
};

export default CardList;
