import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCompanies, deleteCompany } from '../../store/companiesSlice/reducer';
import { changeEmployees, initCurrentEmployees, deleteEmployee } from '../../store/employeesSlice/reducer';

function TableContent(props) {

   const [inputs, setInputs] = useState(false);

   const employees = useSelector(state => state.employeesSlice.employees);

   const dispatch = useDispatch();
   const handleCheckBox = (event) => {
      const { id, className, checked } = event.target;
      if (className === 'companies') {
         dispatch(changeCompanies(id))
         dispatch(initCurrentEmployees({ id, checked }))
      }
      if (className === 'employees') { dispatch(changeEmployees(id)) }
   }

   const handleButton = (event) => {
      const { id, className, innerText } = event.target;
      console.log(id,className,innerText)
      if(innerText === 'Удалить') {
         if(className === 'employees') {
            dispatch(deleteEmployee(id));
         } else {
            dispatch(deleteCompany(id))
            dispatch(initCurrentEmployees())
         }
      }
      
   }

   return (
      <tbody>
         {props.companies?.map((el) => {
            return <tr key={el.id} className='companies' style={{ backgroundColor: el.status && 'yellow' }}>
               <td>{el.name}</td>
               <td>{employees.filter(emp => emp.company_id === el.id).length}</td>
               <td>{el.address}</td>
               <td><input type="checkbox" name='input__checkbox' className='companies' id={el.id} checked={el.status && 'checked'} onChange={handleCheckBox} /></td>
               {el.status &&
                  <><td><button id={el.id} className='companies'onClick={handleButton}>Удалить</button></td><td><button id={el.id} className='employees' onClick={() => setInputs(!inputs)}>Изменить</button></td></>
               }
            </tr>
         })}
         {props.employees?.map((el) => {
            return <tr key={el.id} className='employees' style={{ backgroundColor: el.status && 'pink' }}>
               <td>{el.lastName}</td>
               <td>{el.firstName}</td>
               <td>{el.position}</td>
               <td><input type="checkbox" name='input__checkbox' className='employees' id={el.id} checked={el.status && 'checked'} onChange={handleCheckBox} /></td>
               {el.status &&
                  <>
                  <td><button id={el.id} className='employees' onClick={handleButton}>Удалить</button></td>
                  <td><button id={el.id} className='employees' onClick={() => setInputs(!inputs)}>Изменить</button></td>
                  </>
               }
                </tr>
               
         })}
      </tbody>

   );
}

export default TableContent;