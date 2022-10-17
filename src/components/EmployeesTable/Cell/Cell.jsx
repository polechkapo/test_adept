import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeEmployees, deleteEmployee } from '../../../store/employeesSlice/reducer';
import EditModal from '../Modals/EditIModal';

function Cell({employee}) {

   const [modalId, setModalId] = useState('');
   const [show, setShow] = useState(false);
 
 
   const dispatch = useDispatch();
   const handleCheckBox = (event) => {
     const { id } = event.target;
       dispatch(changeEmployees({ id }));
   }
 
   const handleButton = (event) => {
     const { id } = event.target;
       dispatch(deleteEmployee(id));
   
   };
 
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
              <EditModal employee={employee} setShow={setShow} />
            )}
          </td>
        </>
      )}
    </tr>
   );
}

export default Cell;