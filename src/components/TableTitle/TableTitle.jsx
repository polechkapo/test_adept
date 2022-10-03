import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCompanies } from '../../store/companiesSlice/reducer';
import { changeEmployees } from '../../store/employeesSlice/reducer';
import ModalAddCompany from '../TableModals/ModalAddCompany';
import ModalAddEmployee from '../TableModals/ModalAddEmployee';

function TableTitle({ children, titles }) {
  const dispatch = useDispatch();
  const handleCheckboxAll = (event) => {
    const { checked } = event.target;
    if (titles[4] === 'companies') {
      dispatch(changeCompanies({ checked }));
    }
    if (titles[4] === 'employees') {
      dispatch(changeEmployees({ checked }));
    }
  };

  const [modal, setModal] = useState(false);

  return (
    <>
      <div className='table__title'>
        <h3>{titles[0]}</h3>
        <label htmlFor='input__checkbox'>
          Выделить все
          <input
            type='checkbox'
            name='input__checkbox'
            onChange={handleCheckboxAll}
          />
        </label>
        <div className='table__buttons'>
          <button
            className='table__button table__button-title'
            id={titles[4]}
            onClick={() => setModal(!modal)}
          >
            Добавить
          </button>
        </div>
      </div>
      <table>{children}</table>
      {modal && titles[4] === 'companies' && <ModalAddCompany setModal={setModal} />}
      {modal && titles[4] === 'employees' && <ModalAddEmployee setModal={setModal} />}
    </>
  );
}

export default TableTitle;
