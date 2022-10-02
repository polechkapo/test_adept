/* eslint-disable eqeqeq */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCompany } from '../../store/companiesSlice/reducer';
import { deleteEmployee } from '../../store/employeesSlice/reducer';

function TableHead({ titles, check }) {

   const dispatch = useDispatch();

   const handleDeleteAllButton = (event) => {
      const { id } = event.target;
      if (id === 'companies') { dispatch(deleteCompany()) }
      else { dispatch(deleteEmployee()) }
   }

   return (
      <thead className='table__head'>
         <tr className='table__subtitle'>
            <td>{titles[1]}</td>
            <td>{titles[2]}</td>
            <td>{titles[3]}</td>
            <td><button onClick={handleDeleteAllButton} id={titles[4]} className="table__button">Удалить все</button></td>
         </tr>
      </thead>
   );
}

export default TableHead;