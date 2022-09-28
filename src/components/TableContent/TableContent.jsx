import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCompanies } from '../../store/companiesSlice/reducer';
import { changeEmployees } from '../../store/employeesSlice/reducer';

function TableContent(props) {

   const dispatch = useDispatch();
   const handleCheckBox = (event) => {
      const {id, className} = event.target;
      if(className === 'companies') { dispatch(changeCompanies(id)) }
      if(className === 'employees') { dispatch(changeEmployees(id)) }
   }

   return (
      <tbody>
         {props.companies?.map((el) => {
        return <tr key={el.id} className='companies' style={{backgroundColor: el.status && 'yellow' }}>
                  <td>{el.name}</td>
                  <td>{el.people}</td>
                  <td>{el.address}</td>
                  <td><input type="checkbox" name='input__checkbox' className='companies' id={el.id} onChange={handleCheckBox}/></td>
               </tr>
      })} 
         {props.employees?.map((el) => {
         return <tr key={el.id} style={{backgroundColor: el.status && 'pink' }}>
                  <td>{el.lastName}</td>
                  <td>{el.firstName}</td>
                  <td>{el.position}</td>
                  <td><input type="checkbox" name='input__checkbox' className='employees' id={el.id}onChange={handleCheckBox}/></td>
               </tr>
         })}
      </tbody>
      
   );
}

export default TableContent;