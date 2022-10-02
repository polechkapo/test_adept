import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCompanies } from '../../store/companiesSlice/reducer';
import { changeEmployees } from '../../store/employeesSlice/reducer';
import ModalAddCompany from '../TableInputs/ModalAddCompany';
import ModalAddEmployee from '../TableInputs/ModalAddEmployee';

function Table({ children, titles, check }) {

   const dispatch = useDispatch();
   const handleCheckboxAll = (event) => {
      const { className, checked } = event.target;
      if (className === 'companies') { dispatch(changeCompanies({ checked })) }
      if (className === 'employees') {
         dispatch(changeEmployees({ checked }))
      }
   }

   const [modal, setModal] = useState(false);
   const [type, setType] = useState('')

   const handleModal = (event) => {
      const { id } = event.target;
      setModal(!modal);
      setType(id);
   }

   return (
      <>
         <div className='table__title'>
            <h3>{titles[0]}</h3>
            <label htmlFor='input__checkbox'>Выделить все
               <input type="checkbox" name='input__checkbox' className={titles[4]} onChange={handleCheckboxAll} />
            </label>
            <div className='table__buttons'>
               <button className='table__button table__button-title' id={titles[4]} onClick={handleModal}>Добавить</button>
            </div>
         </div>
         <table>
            {children}
         </table>
         {modal && type === 'companies' && <ModalAddCompany setModal={setModal} />}
         {modal && type === 'employees' && <ModalAddEmployee setModal={setModal} />}
      </>
   );
}

export default Table;