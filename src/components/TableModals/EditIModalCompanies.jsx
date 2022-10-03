import React from 'react';
import { useDispatch } from 'react-redux';
import { editCompany } from '../../store/companiesSlice/reducer';

function EditModalCompanies({ company, setShow }) {
  const dispatch = useDispatch();

  const handleForm = (event) => {
    event.preventDefault();
    const companyName = event.target.companyName.value;
    const companyAddress = event.target.companyAddress.value;
    const { id } = event.target;
    dispatch(editCompany({ id, companyName, companyAddress }));
    setShow(false);
  };

  return (
    <div className='modal' onClick={() => setShow(false)}>
      <div className='modal__content'>
        <h3>Изменить данные о компании</h3>
        <form onSubmit={handleForm} id={company.id} className='table__form'>
          <label htmlFor='companyName'>
            <input
              type='text'
              name='companyName'
              defaultValue={company.name}
              className='table__input'
            />
          </label>
          <label htmlFor='companyAddress'>
            <textarea
              type='text'
              name='companyAddress'
              defaultValue={company.address}
              className='table__input'
            />
          </label>
          <button type='submit' className='table__button'>
            Готово
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditModalCompanies;
