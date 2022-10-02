import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, initCurrentEmployees } from '../../store/employeesSlice/reducer';

function ModalAddEmployee({ setModal }) {

   const dispatch = useDispatch();

   const companies = useSelector(state => state.companiesSlice.companies)

   const handleForm = (event) => {
      event.preventDefault();
      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const position = event.target.position.value;
      const company_id = event.target.company.value;
      if (firstName !== '' || lastName !== '' || position !== '') {
         dispatch(addEmployee({ firstName, lastName, position, company_id }));
         dispatch(initCurrentEmployees())
      }
      setModal(false)
   }

   return (
      <div className="modal">
         <div className="modal__content">
            <h3>Добавить сотрудника</h3>
            <form className="table__form table__form-add" onSubmit={handleForm}>
               <h4>Выберите компанию:</h4>
               <select name="company">
                  {companies.map(el => {
                     return <option id={el.id} value={el.id} key={el.id}>{el.name}</option>
                  })}
               </select>
               <label htmlFor="firstName">
                  <input type="text" name="firstName" className="table__input" placeholder='Имя' />
               </label>
               <label htmlFor="companyAddress">
                  <input type="text" name="lastName" className="table__input" placeholder='Фамилия' />
               </label>
               <label htmlFor="companyName">
                  <input type="text" name="position" className="table__input" placeholder='Должность' />
               </label>
               <button type='submit' className='table__button'>Готово</button>
            </form>
         </div>
      </div>
   );
};

export default ModalAddEmployee;