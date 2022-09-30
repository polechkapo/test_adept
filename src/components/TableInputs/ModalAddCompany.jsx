import React from 'react';
import { useDispatch } from 'react-redux';
import { addCompany } from '../../store/companiesSlice/reducer';

function ModalAddCompany({ setModal }) {

   const dispatch = useDispatch();

   const handleForm = (event) => {
      event.preventDefault();
      const name = event.target.companyName.value;
      const address = event.target.companyAddress.value;
      if(name !== '' && address !== '') {dispatch(addCompany({ name, address }))}
      setModal(false)
   }

   return (
      <div className="modal">
         <div className="modal__content">
            <h3>Добавить компанию</h3>
            <form className="table__form" onSubmit={handleForm}>
               <label htmlFor="companyName">
                  <input type="text" name="companyName" className="table__input" placeholder='Название компании' />
               </label>
               <label htmlFor="companyAddress">
                  <input type="text" name="companyAddress" className="table__input" placeholder='Адрес компании' />
               </label>
               <button type='submit' className='table__button'>Готово</button>
            </form>
         </div>
      </div>
   );
};

export default ModalAddCompany;