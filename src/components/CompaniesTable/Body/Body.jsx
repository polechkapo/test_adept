import React from "react";
import Cell from "../Cell/Cell";

function Body({ companies }) {
  return (
    <tbody>
      {companies.map((company) => {
        return <Cell company={company} key={company.id} />;
      })}
    </tbody>
  );
}

export default Body;
