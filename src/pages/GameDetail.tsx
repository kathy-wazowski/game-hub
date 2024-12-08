import React from "react";
import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import ExpandableText from "../components/ExpandableText";

const GameDetail = () => {
  const { data, isLoading } = useGameDetail();
  console.log(data, "data from game Detail");
  if (isLoading) return <p>is loading...</p>;

  return <ExpandableText>{data?.description ?? ""}</ExpandableText>;
};

export default GameDetail;
