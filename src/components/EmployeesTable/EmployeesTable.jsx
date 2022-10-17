import React, { useState } from "react";
import { useSelector } from "react-redux";
import Body from "./Body/Body";
import Head from "../HeadTable/HeadTable";
import AddModal from "../EmployeesTable/Modals/AddModal";
import Title from "../TitleTable/TitleTable";

function EmployeesTable() {
  const employeesTitles = useSelector((state) => state.employeesSlice.titles);
  const [modal, setModal] = useState(false);

  const employees = useSelector(
    (state) => state.employeesSlice.currentEmployees
  );

  return (
    <>
      {employees.length > 0 ? (
        <Title titles={employeesTitles} className="table__content">
          <Head titles={employeesTitles} tableType={employeesTitles[4]} />
          <Body employees={employees} />
        </Title>
      ) : (
        <button
          className="table__button table__button-title table__button-add"
          onClick={() => setModal(!modal)}
        >
          Добавить cотрудника
        </button>
      )}
      {modal && <AddModal setModal={setModal} />}
    </>
  );
}

export default EmployeesTable;
