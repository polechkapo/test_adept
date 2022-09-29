import React from 'react';
import { useDispatch } from 'react-redux';
import { editCompany } from '../../store/companiesSlice/reducer';

function EditInput({ el, setShow }) {

   const dispatch = useDispatch();

   const handleForm = (event) => {
      event.preventDefault()
      const companyName = event.target.companyName.value;
      const companyAddress = event.target.companyAddress.value;
      const {id} = event.target;
      dispatch(editCompany({id, companyName, companyAddress}))
      setShow(false)
   }

   return (
      <div className='table__form-empl' id={el.id}>
         <form onSubmit={handleForm} id={el.id}>
            <label htmlFor="companyName">
               <input type="text" name="companyName" defaultValue={el.name} />
            </label>
            <label htmlFor="companyAddress">
               <input type="text" name="companyAddress" defaultValue={el.address} />
            </label>
            <button type='submit'>Готово</button>
         </form>
      </div>
   );
}

export default EditInput;