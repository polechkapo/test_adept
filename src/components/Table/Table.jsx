import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TableTitle from '../TableTitle/TableTitle';
import TableContent from '../TableContent/TableContent';
import TableHead from '../TableHead/TableHead';
import ModalAddEmployee from '../TableModals/ModalAddEmployee';
import './table.scss';

function Table() {
  const companies = useSelector((state) => state.companiesSlice.companies);
  const employees = useSelector(
    (state) => state.employeesSlice.currentEmployees
  );
  const companyTitles = useSelector((state) => state.companiesSlice.titles);
  const employeesTitles = useSelector((state) => state.employeesSlice.titles);
  const [modal, setModal] = useState(false);

  return (
    <div className='table'>
      <div className='table__container'>
        <TableTitle className='table__content' titles={companyTitles}>
          <TableHead titles={companyTitles} tableType={companyTitles[4]}/>
          <TableContent companies={companies} tableType={companyTitles[4]}/>
        </TableTitle>
        {employees.length > 0 ? (
          <TableTitle titles={employeesTitles}>
            <TableHead titles={employeesTitles} tableType={employeesTitles[4]}/>
            <TableContent employees={employees} tableType={employeesTitles[4]}/>
          </TableTitle>
        ) : (
          <button
            className='table__button table__button-title table__button-add'
            onClick={() => setModal(!modal)}
          >
            Добавить cотрудника
          </button>
        )}
        {modal && <ModalAddEmployee setModal={setModal} />}
      </div>
    </div>
  );
}

export default Table;
