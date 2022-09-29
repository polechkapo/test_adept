import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCompanies } from '../../store/companiesSlice/reducer';
import { changeEmployees } from '../../store/employeesSlice/reducer';

function TableHead({ titles }) {
   const dispatch = useDispatch();
   const handleCheckboxAll = (event) => {
      const { className } = event.target;
      if (className === 'companies') { dispatch(changeCompanies()) }
      if (className === 'employees') { dispatch(changeEmployees()) }
   }
   return (
      <thead className='table__head'>
         <tr className='table__title'>
            <td><h3>{titles[0]}</h3></td>
            <td><label htmlFor='input__checkbox'>Выделить все</label>
               <input type="checkbox" name='input__checkbox' className={titles[4]} onChange={handleCheckboxAll} /></td>
         </tr>
         <tr className='table__subtitle'>
            <td>{titles[1]}</td>
            <td>{titles[2]}</td>
            <td>{titles[3]}</td>
         </tr>
      </thead>
   );
}

export default TableHead;