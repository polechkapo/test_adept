import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCompanies } from '../../store/companiesSlice/reducer';
import { changeEmployees } from '../../store/employeesSlice/reducer';

function Table({children, titles}) {
   const dispatch = useDispatch();
   const handleCheckboxAll = (event) => {
      const { className } = event.target;
      if (className === 'companies') { dispatch(changeCompanies()) }
      if (className === 'employees') { dispatch(changeEmployees()) }
   }
   return (
      <><div className='table__title'>
         <h3>{titles[0]}</h3>
         <label htmlFor='input__checkbox'>Выделить все
         <input type="checkbox" name='input__checkbox' className={titles[4]} onChange={handleCheckboxAll} />
         </label>
      </div><table>
            {children}
         </table></>
   );
}

export default Table;