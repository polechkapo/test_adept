import React from "react";
import "./table.scss";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import CompaniesTable from "../CompaniesTable/CompaniesTable";

function Table() {
  return (
    <div className="page">
      <div className="page__container">
        <CompaniesTable />
        < EmployeesTable/>
      </div>
    </div>
  );
}

export default Table;
