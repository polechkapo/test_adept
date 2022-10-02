import React from 'react';
import { useDispatch } from 'react-redux';
import { editEmployee } from '../../store/employeesSlice/reducer';

function EditInputEmp({ el, setShow }) {

   const dispatch = useDispatch();

   const handleForm = (event) => {
      event.preventDefault()
      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const position = event.target.position.value;
      const { id } = event.target;
      dispatch(editEmployee({ id, firstName, lastName, position }))
      setShow(false);
   }

   return (
      <div className="modal">
         <div className="modal__content">
            <h3>Изменить данные о cотруднике</h3>
            <form onSubmit={handleForm} id={el.id} className="table__form">
               <label htmlFor="companyName">
                  <input type="text" name="firstName" defaultValue={el.firstName} className="table__input" />
               </label>
               <label htmlFor="companyAddress">
                  <input type="text" name="lastName" defaultValue={el.lastName} className="table__input" />
               </label>
               <label htmlFor="companyAddress">
                  <input type="text" name="position" defaultValue={el.position} className="table__input" />
               </label>
               <button type='submit' className='table__button'>Готово</button>
            </form>
         </div>
      </div>
   );
}

export default EditInputEmp;