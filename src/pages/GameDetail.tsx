import React from "react";
import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";

const GameDetail = () => {
  const { data, isLoading } = useGameDetail();
  console.log(data, "data from game Detail");
  if (isLoading) return <p>is loading...</p>;

  return <div>{data?.description}</div>;
};

export default GameDetail;
