import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCompanies, deleteCompany } from '../../store/companiesSlice/reducer';
import { changeEmployees, initCurrentEmployees, deleteEmployee } from '../../store/employeesSlice/reducer';
import EditInputCompanies from '../TableInputs/EditIModalCompanies';
import EditInputEmp from '../TableInputs/EditIModalEmp';

function TableContent(props) {

   const [inputId, setInputId] = useState();
   const [show, setShow] = useState(false);

   const employees = useSelector(state => state.employeesSlice.employees);

   const dispatch = useDispatch();
   function handleCheckBox(event) {
      const { id, className, checked } = event.target;
      if (className === 'companies') {
         dispatch(changeCompanies({ id }))
         dispatch(initCurrentEmployees({ id, checked }))
      }
      if (className === 'employees') { dispatch(changeEmployees({ id })) }
   }

   const handleButton = (event) => {
      const { id, className } = event.target;
      if (className === 'employees') {
         dispatch(deleteEmployee(id));
      } else {
         dispatch(deleteCompany(id))
         dispatch(initCurrentEmployees())
      }
   }

   return (
      <tbody>
         {props.companies?.map((el) => {
            return <tr key={el.id} className='companies' style={{ backgroundColor: el.status && 'white' }}>
               <td>{el.name}</td>
               <td>{employees.filter(emp => emp.company_id === el.id).length}</td>
               <td>{el.address}</td>
               <td><input type="checkbox" name='input__checkbox' className='companies' id={el.id} checked={el.status && 'checked'} onChange={handleCheckBox} /></td>
               {el.status &&
                  <>
                     <td><button id={el.id} className='companies' onClick={handleButton}>Удалить</button></td>
                     <td><button id={el.id} className='employees' onClick={() => { setInputId(el.id); setShow(!show); }}>Изменить</button></td>
                     <td>{inputId === el.id && show && <EditInputCompanies el={el} setShow={setShow} />}</td>
                  </>}
            </tr>;

         })}
         {props.employees?.map((el) => {
            return <tr key={el.id} className='employees' style={{ backgroundColor: el.status && 'white' }}>
               <td>{el.lastName}</td>
               <td>{el.firstName}</td>
               <td>{el.position}</td>
               <td><input type="checkbox" name='input__checkbox' className='employees' id={el.id} checked={el.status && 'checked'} onChange={handleCheckBox} /></td>
               {el.status &&
                  <>
                     <td><button id={el.id} className='employees' onClick={handleButton}>Удалить</button></td>
                     <td><button id={el.id} className='employees' onClick={() => { setInputId(el.id); setShow(!show); }}>Изменить</button></td>
                     <td>{inputId === el.id && show && <EditInputEmp el={el} setShow={setShow} />}</td>
                  </>}
            </tr>;
         })}
      </tbody>

   );
}

export default TableContent;