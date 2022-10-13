import React from "react";
import Cell from "../Cell/Cell";

function Body({ employees }) {
  return (
    <tbody>
      {employees.map((employee) => {
        return <Cell employee={employee} key={employee.id} />;
      })}
    </tbody>
  );
}

export default Body;
