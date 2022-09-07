import React from "react";

import { useParams } from "react-router-dom";

export const Noticia = () => {
  // const params = useParams();
  const { id } = useParams();

  return (
    <>
      <h1>Noticia id: {id}</h1>
    </>
  );
};
