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
      const {id} = event.target;
      dispatch(editEmployee({id, firstName, lastName, position}))
      setShow(false);
   }

   return (
      <div className='table__form-empl' id={el.id}>
         <form onSubmit={handleForm} id={el.id}>
            <label htmlFor="companyName">
               <input type="text" name="firstName" defaultValue={el.firstName} />
            </label>
            <label htmlFor="companyAddress">
               <input type="text" name="lastName" defaultValue={el.lastName} />
            </label>
            <label htmlFor="companyAddress">
               <input type="text" name="position" defaultValue={el.position} />
            </label>
            <button type='submit'>Готово</button>
         </form>
      </div>
   );
}

export default EditInputEmp;