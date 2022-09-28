import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCompanies } from '../../store/companiesSlice/reducer';
import { changeEmployees, initCurrentEmployees } from '../../store/employeesSlice/reducer';

function TableContent(props) {

   const dispatch = useDispatch();
      const handleCheckBox = (event) => {
         console.log(event.target.checked)
      const {id, className, checked } = event.target;
      if(className === 'companies') { 
         dispatch(changeCompanies(id))
         dispatch(initCurrentEmployees({id, checked})) 
      }
      if(className === 'employees') { dispatch(changeEmployees(id)) }
   }

   return (
      <tbody>
         {props.companies?.map((el) => {
        return <tr key={el.id} className='companies' style={{backgroundColor: el.status && 'yellow' }}>
                  <td>{el.name}</td>
                  <td>{el.people}</td>
                  <td>{el.address}</td>
                  <td><input type="checkbox" name='input__checkbox' className='companies' id={el.id} checked={el.status && 'checked'} onChange={handleCheckBox}/></td>
               </tr>
      })} 
         {props.employees?.map((el) => {
         return <tr key={el.id} className='employees' style={{backgroundColor: el.status && 'pink' }}>
                  <td>{el.lastName}</td>
                  <td>{el.firstName}</td>
                  <td>{el.position}</td>
                  <td><input type="checkbox" name='input__checkbox' className='employees' id={el.id} checked={el.status && 'checked'} onChange={handleCheckBox}/></td>
               </tr>
         })}
      </tbody>
      
   );
}

export default TableContent;