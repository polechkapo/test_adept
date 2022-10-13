import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCompanies, deleteCompany } from '../../../store/companiesSlice/reducer';
import { initCurrentEmployees } from '../../../store/employeesSlice/reducer';
import EditModal from '../Modals/EditModal';

function  Cell({ company }) {

   const dispatch = useDispatch();
   const [modalId, setModalId] = useState('');
   const [show, setShow] = useState(false);

   const employees = useSelector((state) => state.employeesSlice.employees);

   const handleCheckBox = (event) => {
      const { id, checked } = event.target;
        dispatch(changeCompanies({ id }));
        dispatch(initCurrentEmployees({ id, checked }));
    }
  
    const handleButton = (event) => {
      const { id } = event.target;
        dispatch(deleteCompany(id));
    };


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
                    <EditModal company={company} setShow={setShow} />
                  )}
                </td>
              </>
            )}
          </tr>
   );
}

export default Cell;