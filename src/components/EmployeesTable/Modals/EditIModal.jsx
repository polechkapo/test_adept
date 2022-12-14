import React from "react";
import { useDispatch } from "react-redux";
import { editEmployee } from "../../../store/employeesSlice/reducer";

function EditInputEmp({ employee, setShow }) {
  const dispatch = useDispatch();

  const handleForm = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const position = event.target.position.value;
    const { id } = event.target;
    dispatch(editEmployee({ id, firstName, lastName, position }));
    setShow(false);
  };

  return (
    <div className="modal" onClick={() => setShow(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h3>Изменить данные о cотруднике</h3>
        <form onSubmit={handleForm} id={employee.id} className="table__form">
          <label htmlFor="companyName">
            <input
              type="text"
              name="firstName"
              defaultValue={employee.firstName}
              className="table__input"
            />
          </label>
          <label htmlFor="companyAddress">
            <input
              type="text"
              name="lastName"
              defaultValue={employee.lastName}
              className="table__input"
            />
          </label>
          <label htmlFor="companyAddress">
            <input
              type="text"
              name="position"
              defaultValue={employee.position}
              className="table__input"
            />
          </label>
          <button type="submit" className="table__button">
            Готово
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditInputEmp;
