import React from 'react';
import { useDispatch } from 'react-redux';
import { editCompany } from '../../store/companiesSlice/reducer';

function EditInput({ el, setShow }) {
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
    <div className='modal'>
      <div className='modal__content'>
        <h3>Изменить данные о компании</h3>
        <form onSubmit={handleForm} id={el.id} className='table__form'>
          <label htmlFor='companyName'>
            <input
              type='text'
              name='companyName'
              defaultValue={el.name}
              className='table__input'
            />
          </label>
          <label htmlFor='companyAddress'>
            <textarea
              type='text'
              name='companyAddress'
              defaultValue={el.address}
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

export default EditInput;
