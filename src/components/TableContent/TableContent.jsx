import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCompanies,
  deleteCompany,
} from '../../store/companiesSlice/reducer';
import {
  changeEmployees,
  initCurrentEmployees,
  deleteEmployee,
} from '../../store/employeesSlice/reducer';
import EditModalCompanies from '../TableModals/EditIModalCompanies';
import EditInputEmp from '../TableModals/EditIModalEmp';

function TableContent(props) {
  const [modalId, setModalId] = useState('');
  const [show, setShow] = useState(false);

  const employees = useSelector((state) => state.employeesSlice.employees);

  const dispatch = useDispatch();
  const handleCheckBox = (event) => {
    const { id, checked } = event.target;
    if (props.tableType === 'companies') {
      dispatch(changeCompanies({ id }));
      dispatch(initCurrentEmployees({ id, checked }));
    }
    if (props.tableType === 'employees') {
      dispatch(changeEmployees({ id }));
    }
  }

  const handleButton = (event) => {
    const { id } = event.target;
    if (props.tableType === 'employees') {
      dispatch(deleteEmployee(id));
    } else {
      dispatch(deleteCompany(id));
      dispatch(initCurrentEmployees());
    }
  };

  return (
    <tbody>
      {props.companies?.map((company) => {
        return (
          <tr
            key={company.id}
            className='companies'
            style={{ backgroundColor: company.status && 'white' }}
          >
            <td>{company.name}</td>
            <td>
              {employees.filter((emp) => emp.company_id === company.id).length}
            </td>
            <td>{company.address}</td>
            <td>
              <input
                type='checkbox'
                name='input__checkbox'
                className='companies'
                id={company.id}
                checked={company.status && 'checked'}
                onChange={handleCheckBox}
              />
            </td>
            {company.status && (
              <>
                <td>
                  <button
                    id={company.id}
                    className='companies'
                    onClick={handleButton}
                  >
                    Удалить
                  </button>
                </td>
                <td>
                  <button
                    id={company.id}
                    className='employees'
                    onClick={() => {
                      setModalId(company.id);
                      setShow(!show);
                    }}
                  >
                    Изменить
                  </button>
                </td>
                <td>
                  {modalId === company.id && show && (
                    <EditModalCompanies company={company} setShow={setShow} />
                  )}
                </td>
              </>
            )}
          </tr>
        );
      })}
      {props.employees?.map((employee) => {
        return (
          <tr
            key={employee.id}
            className='employees'
            style={{ backgroundColor: employee.status && 'white' }}
          >
            <td>{employee.lastName}</td>
            <td>{employee.firstName}</td>
            <td>{employee.position}</td>
            <td>
              <input
                type='checkbox'
                name='input__checkbox'
                className='employees'
                id={employee.id}
                checked={employee.status && 'checked'}
                onChange={handleCheckBox}
              />
            </td>
            {employee.status && (
              <>
                <td>
                  <button
                    id={employee.id}
                    className='employees'
                    onClick={handleButton}
                  >
                    Удалить
                  </button>
                </td>
                <td>
                  <button
                    id={employee.id}
                    className='employees'
                    onClick={() => {
                      setModalId(employee.id);
                      setShow(!show);
                    }}
                  >
                    Изменить
                  </button>
                </td>
                <td>
                  {modalId === employee.id && show && (
                    <EditInputEmp employee={employee} setShow={setShow} />
                  )}
                </td>
              </>
            )}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableContent;
