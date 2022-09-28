import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employees: [
      {
        id: 6, firstName: 'Борис', lastName: 'Иванов', position: 'Стоматолог', company_id: 1, status: false,
      },
      {
        id: 7, firstName: 'Ева', lastName: 'Зайцева', position: 'Налоговый инспектор', company_id: 1, status: false,
      },
      {
        id: 8, firstName: 'Антон', lastName: 'Носков', position: 'Рыбак', company_id: 1, status: false,
      },
      {
        id: 9, firstName: 'Алиса', lastName: 'Савина', position: 'Системный администратор', company_id: 2, status: false,
      },
      {
        id: 10, firstName: 'Кирилл', lastName: 'Федоров', position: 'Отделочник', company_id: 2, status: false,
      },
      {
        id: 11, firstName: 'Кира', lastName: 'Волкова', position: 'Имиджмейкер', company_id: 2, status: false,
      },
      {
        id: 12, firstName: 'Мария', lastName: 'Жукова', position: 'Менеджер торгового зала', company_id: 3, status: false,
      },
      {
        id: 13, firstName: 'Ольга', lastName: 'Дмитриева', position: 'Испытатель', company_id: 3, status: false,
      },
      {
        id: 14, firstName: 'Никита', lastName: 'Иванов', position: 'Египтолог', company_id: 3, status: false,
      },
      {
        id: 15, firstName: 'Александр', lastName: 'Соловьев', position: 'Копирайтер', company_id: 4, status: false,
      },
      {
        id: 16, firstName: 'Ян', lastName: 'Терентьев', position: 'Стоматолог', company_id: 4, status: false,
      },
      {
        id: 17, firstName: 'Евгений', lastName: 'Максимов', position: 'Дворник', company_id: 4, status: false,
      },
      {
        id: 18, firstName: 'Анатолий', lastName: 'Непомнящий', position: 'Менеджер по туризму', company_id: 5, status: false,
      },
      {
        id: 19, firstName: 'Артем', lastName: 'Дудкин', position: 'Архитектор-проектировщик', company_id: 5, status: false,
      },
      {
        id: 20, firstName: 'Полина', lastName: 'Ларионова', position: 'Стоматолог', company_id: 5, status: false,
      },

    ],
    currentEmployees: [],
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
   changeEmployees: (state, action) => {
    if(action.payload) {state.employees = state.employees.map(el => el.id === +action.payload ? {...el, status: !el.status} : el)}
    else { state.employees = state.employees.map( el => ({...el, status: !el.status }))}
 }
  },
  extraReducers: () => {
  },
});

export const { changeEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;