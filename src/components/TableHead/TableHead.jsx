import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCompanies } from '../../store/companiesSlice/reducer';
import { changeEmployees } from '../../store/employeesSlice/reducer';

function TableHead({titles}) {
   const dispatch = useDispatch();
   const handleCheckboxAll = (event) => {
      const {className} = event.target;
      if(className === 'companies') {dispatch(changeCompanies())}
      dispatch(changeEmployees())
   }
   return (
      <thead>
          <tr>
               <td>{titles[0]}</td>
               <td><label htmlFor='input__checkbox'>Выделить все</label>
                  <input type="checkbox" name='input__checkbox' className={titles[4]} onChange={handleCheckboxAll}/></td>
            </tr>
            <tr>
               <td>{titles[1]}</td>
               <td>{titles[2]}</td>
               <td>{titles[3]}</td>
            </tr>
      </thead>
   );
}

export default TableHead;